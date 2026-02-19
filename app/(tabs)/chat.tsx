import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '@/components/Header';
import { ChatCategorySelect } from '@/components/ChatCategorySelect';
import { ChatSubCategory } from '@/components/ChatSubCategory';
import { ChatConfirmation } from '@/components/ChatConfirmation';
import { ChatUrgency } from '@/components/ChatUrgency';
import { ChatMaintenance } from '@/components/ChatMaintenance';
import { ChatTicketForm } from '@/components/ChatTicketForm';
import { ChatDivers } from '@/components/ChatDivers';
import { categories, Category, SubCategory } from '@/constants/chatData';

type Step = 
  | 'categories'
  | 'subcategories'
  | 'confirmation'
  | 'urgency'
  | 'maintenance'
  | 'ticket'
  | 'ticket-mycharge'
  | 'divers';

export default function ChatScreen() {
  const [step, setStep] = useState<Step>('categories');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    
    switch (category.type) {
      case 'urgency':
        setStep('urgency');
        break;
      case 'maintenance':
        setStep('maintenance');
        break;
      case 'divers':
        setStep('divers');
        break;
      default:
        setStep('subcategories');
    }
  };

  const handleSubCategorySelect = (subCategory: SubCategory, comment: string) => {
    setSelectedSubCategory(subCategory);
    setStep('confirmation');
  };

  const handleBack = () => {
    setStep('categories');
    setSelectedCategory(null);
    setSelectedSubCategory(null);
  };

  const handleNewRequest = () => {
    setStep('categories');
    setSelectedCategory(null);
    setSelectedSubCategory(null);
  };

  const handleMaintenanceMyCharge = (subCategory: SubCategory) => {
    setSelectedSubCategory(subCategory);
    setStep('ticket-mycharge');
  };

  const handleMaintenanceOwnerCharge = (subCategory: SubCategory) => {
    setSelectedSubCategory(subCategory);
    setStep('ticket');
  };

  const handleTicketSubmit = () => {
    handleNewRequest();
  };

  const handleDiversSubmit = (message: string) => {
    setSelectedSubCategory({ id: 'divers', label: 'Autre demande' });
    setStep('confirmation');
  };

  const renderContent = () => {
    switch (step) {
      case 'categories':
        return (
          <ChatCategorySelect
            categories={categories}
            onSelect={handleCategorySelect}
          />
        );

      case 'subcategories':
        if (!selectedCategory?.subCategories) return null;
        return (
          <ChatSubCategory
            categoryLabel={selectedCategory.label}
            subCategories={selectedCategory.subCategories}
            onSelect={handleSubCategorySelect}
            onBack={handleBack}
          />
        );

      case 'confirmation':
        return (
          <ChatConfirmation
            categoryLabel={selectedCategory?.label || ''}
            subCategoryLabel={selectedSubCategory?.label || ''}
            onNewRequest={handleNewRequest}
          />
        );

      case 'urgency':
        return <ChatUrgency onBack={handleBack} />;

      case 'maintenance':
        if (!selectedCategory?.subCategories) return null;
        return (
          <ChatMaintenance
            subCategories={selectedCategory.subCategories}
            onBack={handleBack}
            onMyCharge={handleMaintenanceMyCharge}
            onOwnerCharge={handleMaintenanceOwnerCharge}
          />
        );

      case 'ticket':
        if (!selectedSubCategory) return null;
        return (
          <ChatTicketForm
            subCategory={selectedSubCategory}
            onBack={() => setStep('maintenance')}
            onSubmit={handleTicketSubmit}
            isOwnerCharge={true}
          />
        );

      case 'ticket-mycharge':
        if (!selectedSubCategory) return null;
        return (
          <ChatTicketForm
            subCategory={selectedSubCategory}
            onBack={() => setStep('maintenance')}
            onSubmit={handleTicketSubmit}
            isOwnerCharge={false}
          />
        );

      case 'divers':
        return (
          <ChatDivers
            onBack={handleBack}
            onSubmit={handleDiversSubmit}
          />
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Header 
        title="J'adore Ma Loc" 
        subtitle="Contact agence"
      />
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
