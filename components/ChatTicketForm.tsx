import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, TextInput } from 'react-native';
import { MotiView } from 'moti';
import { ArrowLeft, Upload, Camera, FileText, CheckCircle, X, Home } from 'lucide-react-native';
import { SubCategory } from '@/constants/chatData';

interface ChatTicketFormProps {
  subCategory: SubCategory;
  onBack: () => void;
  onSubmit: () => void;
  isOwnerCharge?: boolean;
}

export function ChatTicketForm({ subCategory, onBack, onSubmit, isOwnerCharge = true }: ChatTicketFormProps) {
  const [devisUploaded, setDevisUploaded] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleDevisUpload = () => {
    // Simulation d'upload
    setDevisUploaded(true);
  };

  const handlePhotoUpload = () => {
    // Simulation d'upload
    setPhotoUploaded(true);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <View style={styles.container}>
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'timing', duration: 400 }}
          style={styles.successContent}
        >
          <View style={styles.successIcon}>
            <CheckCircle size={48} color="#10b981" />
          </View>

          <Text style={styles.successTitle}>Demande envoyée !</Text>
          
          <View style={styles.ticketCard}>
            <Text style={styles.ticketLabel}>Numéro de suivi</Text>
            <Text style={styles.ticketNumber}>DEM-2026-{Math.floor(Math.random() * 9000) + 1000}</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Prochaines étapes</Text>
            <Text style={styles.infoStep}>1. L'agence va examiner votre demande</Text>
            {isOwnerCharge && <Text style={styles.infoStep}>2. Le propriétaire sera contacté</Text>}
            <Text style={styles.infoStep}>{isOwnerCharge ? '3.' : '2.'} Vous serez notifié de la décision</Text>
          </View>

          <Text style={styles.disclaimer}>
            Délai de traitement estimé : 48 à 72h ouvrées
          </Text>

          <Pressable style={styles.doneButton} onPress={onSubmit}>
            <Home size={20} color="#ffffff" />
            <Text style={styles.doneButtonText}>Retour à l'accueil</Text>
          </Pressable>
        </MotiView>
      </View>
    );
  }

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
        <Text style={styles.title}>Votre demande</Text>
        <Text style={styles.subtitle}>
          {isOwnerCharge ? 'Demande de prise en charge propriétaire' : 'Signalement à l\'agence'}
        </Text>

        <View style={styles.problemCard}>
          <Text style={styles.problemLabel}>Problème signalé</Text>
          <Text style={styles.problemValue}>{subCategory.label}</Text>
        </View>
      </MotiView>

      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 300, delay: 100 }}
      >
        <Text style={styles.sectionTitle}>1. Télécharger le devis {!isOwnerCharge && <Text style={styles.optional}>(facultatif)</Text>}</Text>
        <Pressable 
          style={[styles.uploadCard, devisUploaded && styles.uploadCardDone]}
          onPress={handleDevisUpload}
        >
          {devisUploaded ? (
            <>
              <View style={styles.uploadIconDone}>
                <CheckCircle size={24} color="#10b981" />
              </View>
              <View style={styles.uploadTextContainer}>
                <Text style={styles.uploadTextDone}>Devis_plomberie.pdf</Text>
                <Text style={styles.uploadSubtext}>Document ajouté</Text>
              </View>
              <Pressable onPress={() => setDevisUploaded(false)}>
                <X size={20} color="#9ca3af" />
              </Pressable>
            </>
          ) : (
            <>
              <View style={styles.uploadIcon}>
                <FileText size={24} color="#ef4146" />
              </View>
              <View style={styles.uploadTextContainer}>
                <Text style={styles.uploadText}>Ajouter le devis</Text>
                <Text style={styles.uploadSubtext}>PDF, JPG ou PNG (max 5 Mo)</Text>
              </View>
              <Upload size={20} color="#9ca3af" />
            </>
          )}
        </Pressable>
      </MotiView>

      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 300, delay: 200 }}
      >
        <Text style={styles.sectionTitle}>2. Photo du problème</Text>
        <Pressable 
          style={[styles.uploadCard, photoUploaded && styles.uploadCardDone]}
          onPress={handlePhotoUpload}
        >
          {photoUploaded ? (
            <>
              <View style={styles.uploadIconDone}>
                <CheckCircle size={24} color="#10b981" />
              </View>
              <View style={styles.uploadTextContainer}>
                <Text style={styles.uploadTextDone}>Photo_probleme.jpg</Text>
                <Text style={styles.uploadSubtext}>Photo ajoutée</Text>
              </View>
              <Pressable onPress={() => setPhotoUploaded(false)}>
                <X size={20} color="#9ca3af" />
              </Pressable>
            </>
          ) : (
            <>
              <View style={styles.uploadIcon}>
                <Camera size={24} color="#ef4146" />
              </View>
              <View style={styles.uploadTextContainer}>
                <Text style={styles.uploadText}>Ajouter une photo</Text>
                <Text style={styles.uploadSubtext}>Prenez une photo du problème</Text>
              </View>
              <Upload size={20} color="#9ca3af" />
            </>
          )}
        </Pressable>
      </MotiView>

      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 300, delay: 300 }}
      >
        <Text style={styles.sectionTitle}>3. Description du problème</Text>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            placeholder="Décrivez le problème en détail..."
            placeholderTextColor="#9ca3af"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
            textAlignVertical="top"
          />
        </View>
      </MotiView>

      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 300, delay: 400 }}
      >
        <Pressable 
          style={[
            styles.submitButton,
            (isOwnerCharge ? (!devisUploaded || !description) : !description) && styles.submitButtonDisabled
          ]}
          onPress={handleSubmit}
          disabled={isOwnerCharge ? (!devisUploaded || !description) : !description}
        >
          <Text style={styles.submitButtonText}>Envoyer ma demande</Text>
        </Pressable>

        <Text style={styles.note}>
          {isOwnerCharge 
            ? '* Le devis et la description sont obligatoires'
            : '* La description est obligatoire, le devis est facultatif'}
        </Text>
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
    marginBottom: 16,
  },
  problemCard: {
    backgroundColor: '#fef2f2',
    borderRadius: 12,
    padding: 14,
    marginBottom: 24,
  },
  problemLabel: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 4,
  },
  problemValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ef4146',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0a373e',
    marginBottom: 10,
  },
  uploadCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'transparent',
    borderStyle: 'dashed',
  },
  uploadCardDone: {
    backgroundColor: '#ecfdf5',
    borderColor: '#10b981',
    borderStyle: 'solid',
  },
  uploadIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#fef2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  uploadIconDone: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#dcfce7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  uploadTextContainer: {
    flex: 1,
  },
  uploadText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0a373e',
  },
  uploadTextDone: {
    fontSize: 14,
    fontWeight: '600',
    color: '#10b981',
  },
  uploadSubtext: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 2,
  },
  textAreaContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 14,
    marginBottom: 24,
    minHeight: 120,
  },
  textArea: {
    fontSize: 14,
    color: '#0a373e',
    minHeight: 100,
  },
  submitButton: {
    backgroundColor: '#ef4146',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  submitButtonDisabled: {
    backgroundColor: '#d1d5db',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  note: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
  },
  optional: {
    fontSize: 12,
    color: '#9ca3af',
    fontWeight: 'normal',
  },
  successContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ecfdf5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a373e',
    marginBottom: 24,
  },
  ticketCard: {
    backgroundColor: '#0a373e',
    borderRadius: 14,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  ticketLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 4,
  },
  ticketNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  infoCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 14,
    padding: 16,
    width: '100%',
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0a373e',
    marginBottom: 12,
  },
  infoStep: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 8,
  },
  disclaimer: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 24,
  },
  doneButton: {
    backgroundColor: '#10b981',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  doneButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
