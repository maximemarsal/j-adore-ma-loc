import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import { MotiView } from 'moti';
import { ArrowLeft, ChevronRight, Phone, Tag, Copy, Check } from 'lucide-react-native';
import { SubCategory, Artisan, artisans } from '@/constants/chatData';

interface ChatMaintenanceProps {
  subCategories: SubCategory[];
  onBack: () => void;
  onMyCharge: () => void;
  onOwnerCharge: (subCategory: SubCategory) => void;
}

type Step = 'subcategory' | 'artisans' | 'choice';

export function ChatMaintenance({ 
  subCategories, 
  onBack, 
  onMyCharge,
  onOwnerCharge 
}: ChatMaintenanceProps) {
  const [step, setStep] = useState<Step>('subcategory');
  const [selectedSub, setSelectedSub] = useState<SubCategory | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleSubSelect = (sub: SubCategory) => {
    setSelectedSub(sub);
    setStep('artisans');
  };

  const handleCopyCode = (code: string) => {
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleMyCharge = () => {
    onMyCharge();
  };

  const handleOwnerCharge = () => {
    if (selectedSub) {
      onOwnerCharge(selectedSub);
    }
  };

  if (step === 'subcategory') {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Pressable style={styles.backLink} onPress={onBack}>
          <ArrowLeft size={20} color="#ef4146" />
          <Text style={styles.backLinkText}>Retour</Text>
        </Pressable>

        <MotiView
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 300 }}
        >
          <Text style={styles.title}>Maintenance & Réparations</Text>
          <Text style={styles.subtitle}>Quel est le problème ?</Text>
        </MotiView>

        {subCategories.map((sub, index) => (
          <MotiView
            key={sub.id}
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 300, delay: index * 50 }}
          >
            <Pressable style={styles.optionCard} onPress={() => handleSubSelect(sub)}>
              <Text style={styles.optionLabel}>{sub.label}</Text>
              <ChevronRight size={20} color="#9ca3af" />
            </Pressable>
          </MotiView>
        ))}
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable style={styles.backLink} onPress={() => setStep('subcategory')}>
        <ArrowLeft size={20} color="#ef4146" />
        <Text style={styles.backLinkText}>Retour</Text>
      </Pressable>

      <MotiView
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 300 }}
      >
        <Text style={styles.title}>Artisans partenaires</Text>
        <Text style={styles.subtitle}>
          Profitez de réductions exclusives en mentionnant J'adore Ma Loc
        </Text>
      </MotiView>

      {artisans.map((artisan, index) => (
        <MotiView
          key={artisan.id}
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 300, delay: index * 80 }}
        >
          <View style={styles.artisanCard}>
            <View style={styles.artisanHeader}>
              <View style={styles.artisanLogo}>
                <Image
                  source={{ uri: artisan.logo }}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.artisanInfo}>
                <Text style={styles.artisanName}>{artisan.name}</Text>
                <Text style={styles.artisanSpecialty}>{artisan.specialty}</Text>
              </View>
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{artisan.discount}</Text>
              </View>
            </View>

            <View style={styles.codeRow}>
              <Tag size={16} color="#ef4146" />
              <Text style={styles.codeLabel}>Code promo :</Text>
              <Text style={styles.codeValue}>{artisan.code}</Text>
              <Pressable 
                style={styles.copyButton}
                onPress={() => handleCopyCode(artisan.code)}
              >
                {copiedCode === artisan.code ? (
                  <Check size={14} color="#10b981" />
                ) : (
                  <Copy size={14} color="#6b7280" />
                )}
              </Pressable>
            </View>

            <View style={styles.phoneRow}>
              <Phone size={16} color="#0a373e" />
              <Text style={styles.phoneNumber}>{artisan.phone}</Text>
            </View>
          </View>
        </MotiView>
      ))}

      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 400, delay: 400 }}
        style={styles.choiceSection}
      >
        <Text style={styles.choiceTitle}>Qui prend en charge la réparation ?</Text>
        
        <Pressable style={styles.myChargeButton} onPress={handleMyCharge}>
          <Text style={styles.myChargeText}>À ma charge</Text>
          <Text style={styles.myChargeSubtext}>J'ai contacté un artisan</Text>
        </Pressable>

        <Pressable style={styles.ownerChargeButton} onPress={handleOwnerCharge}>
          <Text style={styles.ownerChargeText}>Demander à la charge du propriétaire</Text>
          <Text style={styles.ownerChargeSubtext}>Créer un ticket avec devis</Text>
        </Pressable>
      </MotiView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  backLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  backLinkText: {
    fontSize: 14,
    color: '#ef4146',
    fontWeight: '600',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0a373e',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 20,
  },
  optionCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionLabel: {
    fontSize: 14,
    color: '#0a373e',
    flex: 1,
  },
  artisanCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  artisanHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  artisanLogo: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  logo: {
    width: 32,
    height: 32,
  },
  artisanInfo: {
    flex: 1,
  },
  artisanName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0a373e',
  },
  artisanSpecialty: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  discountBadge: {
    backgroundColor: '#ef4146',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  discountText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    gap: 8,
  },
  codeLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  codeValue: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0a373e',
    flex: 1,
  },
  copyButton: {
    padding: 4,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  phoneNumber: {
    fontSize: 14,
    color: '#0a373e',
    fontWeight: '600',
  },
  choiceSection: {
    marginTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 24,
  },
  choiceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0a373e',
    marginBottom: 16,
    textAlign: 'center',
  },
  myChargeButton: {
    backgroundColor: '#10b981',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  myChargeText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  myChargeSubtext: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    marginTop: 4,
  },
  ownerChargeButton: {
    backgroundColor: '#0a373e',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  ownerChargeText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ownerChargeSubtext: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    marginTop: 4,
  },
});
