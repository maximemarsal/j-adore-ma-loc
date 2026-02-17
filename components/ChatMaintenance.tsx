import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, Image } from 'react-native';
import { MotiView } from 'moti';
import { ArrowLeft, ChevronRight, Phone, Tag, Copy, Check, User, Building2, Send } from 'lucide-react-native';
import { SubCategory, Artisan, artisans } from '@/constants/chatData';

interface ChatMaintenanceProps {
  subCategories: SubCategory[];
  onBack: () => void;
  onMyCharge: () => void;
  onOwnerCharge: (subCategory: SubCategory) => void;
}

type Step = 'subcategory' | 'choice' | 'artisans' | 'owner-process';

export function ChatMaintenance({ 
  subCategories, 
  onBack, 
  onMyCharge,
  onOwnerCharge 
}: ChatMaintenanceProps) {
  const [step, setStep] = useState<Step>('subcategory');
  const [selectedSub, setSelectedSub] = useState<SubCategory | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Step 1: Select subcategory first
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
          <Text style={styles.subtitle}>Quel est le type de problème ?</Text>
        </MotiView>

        {subCategories.map((sub, index) => (
          <MotiView
            key={sub.id}
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 300, delay: index * 50 }}
          >
            <Pressable 
              style={styles.optionCard} 
              onPress={() => {
                setSelectedSub(sub);
                setStep('choice');
              }}
            >
              <Text style={styles.optionLabel}>{sub.label}</Text>
              <ChevronRight size={20} color="#9ca3af" />
            </Pressable>
          </MotiView>
        ))}
      </ScrollView>
    );
  }

  // Step 2: Choice between "À ma charge" or "À la charge du propriétaire"
  if (step === 'choice') {
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
          <View style={styles.selectedProblem}>
            <Text style={styles.selectedProblemLabel}>Problème sélectionné</Text>
            <Text style={styles.selectedProblemValue}>{selectedSub?.label}</Text>
          </View>

          <Text style={styles.title}>Qui prend en charge ?</Text>
          <Text style={styles.subtitle}>Choisissez le mode de prise en charge</Text>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 300, delay: 100 }}
        >
          <Pressable 
            style={styles.choiceCard}
            onPress={() => setStep('artisans')}
          >
            <View style={styles.choiceIconContainer}>
              <User size={28} color="#0a373e" />
            </View>
            <View style={styles.choiceContent}>
              <Text style={styles.choiceTitle}>À ma charge</Text>
              <Text style={styles.choiceDescription}>
                Contactez un artisan partenaire et profitez de réductions exclusives
              </Text>
              <View style={styles.choiceBadge}>
                <Text style={styles.choiceBadgeText}>Jusqu'à -20% de réduction sur les artisans partenaires</Text>
              </View>
            </View>
            <ChevronRight size={20} color="#9ca3af" />
          </Pressable>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 300, delay: 200 }}
        >
          <Pressable 
            style={styles.choiceCard}
            onPress={() => setStep('owner-process')}
          >
            <View style={[styles.choiceIconContainer, styles.ownerIconContainer]}>
              <Building2 size={28} color="#ffffff" />
            </View>
            <View style={styles.choiceContent}>
              <Text style={styles.choiceTitle}>À la charge du propriétaire</Text>
              <Text style={styles.choiceDescription}>
                Faites une demande de prise en charge auprès de votre propriétaire
              </Text>
            </View>
            <ChevronRight size={20} color="#9ca3af" />
          </Pressable>
        </MotiView>
      </ScrollView>
    );
  }

  // Step: Owner process explanation with artisans
  if (step === 'owner-process') {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Pressable style={styles.backLink} onPress={() => setStep('choice')}>
          <ArrowLeft size={20} color="#ef4146" />
          <Text style={styles.backLinkText}>Retour</Text>
        </Pressable>

        <MotiView
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 300 }}
        >
          <Text style={styles.title}>Demande de prise en charge</Text>
          <Text style={styles.subtitle}>Suivez ces étapes pour faire votre demande</Text>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 300, delay: 100 }}
          style={styles.processCard}
        >
          <View style={styles.processStep}>
            <View style={styles.processNumber}>
              <Text style={styles.processNumberText}>1</Text>
            </View>
            <View style={styles.processStepContent}>
              <Text style={styles.processStepTitle}>Contactez un artisan partenaire</Text>
              <Text style={styles.processStepDescription}>
                Profitez de nos réductions même pour un devis
              </Text>
            </View>
          </View>

          <View style={styles.processLine} />

          <View style={styles.processStep}>
            <View style={styles.processNumber}>
              <Text style={styles.processNumberText}>2</Text>
            </View>
            <View style={styles.processStepContent}>
              <Text style={styles.processStepTitle}>Demandez un devis</Text>
              <Text style={styles.processStepDescription}>
                L'artisan établira un diagnostic et un devis détaillé
              </Text>
            </View>
          </View>

          <View style={styles.processLine} />

          <View style={styles.processStep}>
            <View style={styles.processNumber}>
              <Text style={styles.processNumberText}>3</Text>
            </View>
            <View style={styles.processStepContent}>
              <Text style={styles.processStepTitle}>Envoyez votre demande</Text>
              <Text style={styles.processStepDescription}>
                Joignez le devis, une photo et une description
              </Text>
            </View>
          </View>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 300, delay: 200 }}
        >
          <Text style={styles.sectionTitle}>Nos artisans partenaires</Text>
          
          {artisans.map((artisan, index) => (
            <View key={artisan.id} style={styles.miniArtisanCard}>
              <View style={styles.miniArtisanLogo}>
                <Image
                  source={{ uri: artisan.logo }}
                  style={styles.miniLogo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.miniArtisanInfo}>
                <Text style={styles.miniArtisanName}>{artisan.name}</Text>
                <Text style={styles.miniArtisanPhone}>{artisan.phone}</Text>
              </View>
              <View style={styles.miniDiscountBadge}>
                <Text style={styles.miniDiscountText}>{artisan.discount}</Text>
              </View>
            </View>
          ))}
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 300, delay: 300 }}
        >
          <Pressable 
            style={styles.createTicketButton}
            onPress={() => selectedSub && onOwnerCharge(selectedSub)}
          >
            <Send size={20} color="#ffffff" />
            <Text style={styles.createTicketButtonText}>Faire ma demande</Text>
          </Pressable>
        </MotiView>
      </ScrollView>
    );
  }

  // Step: Show artisans (for "à ma charge")
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable style={styles.backLink} onPress={() => setStep('choice')}>
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
      >
        <Pressable style={styles.doneButton} onPress={onMyCharge}>
          <Text style={styles.doneButtonText}>J'ai contacté un artisan</Text>
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
  selectedProblem: {
    backgroundColor: '#fef2f2',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
  },
  selectedProblemLabel: {
    fontSize: 11,
    color: '#9ca3af',
    marginBottom: 2,
  },
  selectedProblemValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ef4146',
  },
  choiceCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  choiceIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  ownerIconContainer: {
    backgroundColor: '#0a373e',
  },
  choiceContent: {
    flex: 1,
  },
  choiceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0a373e',
    marginBottom: 4,
  },
  choiceDescription: {
    fontSize: 13,
    color: '#6b7280',
    lineHeight: 18,
  },
  choiceBadge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  choiceBadgeText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  processCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  processStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  processNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#0a373e',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  processNumberText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  processStepContent: {
    flex: 1,
  },
  processStepTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0a373e',
    marginBottom: 4,
  },
  processStepDescription: {
    fontSize: 13,
    color: '#6b7280',
    lineHeight: 18,
  },
  processLine: {
    width: 2,
    height: 20,
    backgroundColor: '#e5e7eb',
    marginLeft: 15,
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0a373e',
    marginBottom: 12,
  },
  miniArtisanCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniArtisanLogo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  miniLogo: {
    width: 28,
    height: 28,
  },
  miniArtisanInfo: {
    flex: 1,
  },
  miniArtisanName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0a373e',
  },
  miniArtisanPhone: {
    fontSize: 12,
    color: '#6b7280',
  },
  miniDiscountBadge: {
    backgroundColor: '#ef4146',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  miniDiscountText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  createTicketButton: {
    backgroundColor: '#0a373e',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 16,
  },
  createTicketButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
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
  doneButton: {
    backgroundColor: '#10b981',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  doneButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
