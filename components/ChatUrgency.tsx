import React from 'react';
import { View, Text, Pressable, StyleSheet, Linking } from 'react-native';
import { MotiView } from 'moti';
import { AlertTriangle, Phone, ArrowLeft } from 'lucide-react-native';
import { agencyPhone, agencyName } from '@/constants/chatData';

interface ChatUrgencyProps {
  onBack: () => void;
}

export function ChatUrgency({ onBack }: ChatUrgencyProps) {
  const handleCall = () => {
    Linking.openURL(`tel:${agencyPhone.replace(/\s/g, '')}`);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backLink} onPress={onBack}>
        <ArrowLeft size={20} color="#ef4146" />
        <Text style={styles.backLinkText}>Retour</Text>
      </Pressable>

      <MotiView
        from={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'timing', duration: 400 }}
        style={styles.content}
      >
        <View style={styles.iconContainer}>
          <AlertTriangle size={48} color="#ef4146" />
        </View>

        <Text style={styles.title}>Urgence</Text>
        <Text style={styles.subtitle}>
          En cas d'urgence, contactez immédiatement l'agence par téléphone
        </Text>

        <View style={styles.urgencyList}>
          <Text style={styles.urgencyItem}>• Dégât des eaux (grave)</Text>
          <Text style={styles.urgencyItem}>• Fuite de gaz</Text>
          <Text style={styles.urgencyItem}>• Incendie</Text>
          <Text style={styles.urgencyItem}>• Cambriolage / Effraction</Text>
          <Text style={styles.urgencyItem}>• Panne électrique totale</Text>
        </View>

        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 400, delay: 200 }}
          style={styles.phoneCard}
        >
          <Text style={styles.agencyName}>{agencyName}</Text>
          <Text style={styles.phoneNumber}>{agencyPhone}</Text>
          <Text style={styles.availability}>Disponible 24h/24 - 7j/7</Text>
        </MotiView>

        <Pressable style={styles.callButton} onPress={handleCall}>
          <Phone size={20} color="#ffffff" />
          <Text style={styles.callButtonText}>Appeler maintenant</Text>
        </Pressable>

        <Text style={styles.disclaimer}>
          Pour les demandes non urgentes, utilisez les autres catégories.
        </Text>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  content: {
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fef2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ef4146',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 20,
  },
  urgencyList: {
    backgroundColor: '#fef2f2',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    marginBottom: 20,
  },
  urgencyItem: {
    fontSize: 14,
    color: '#0a373e',
    marginBottom: 8,
  },
  phoneCard: {
    backgroundColor: '#0a373e',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  agencyName: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 8,
  },
  phoneNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  availability: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '600',
  },
  callButton: {
    backgroundColor: '#ef4146',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 16,
  },
  callButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disclaimer: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
  },
});
