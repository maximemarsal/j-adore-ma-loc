import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { CheckCircle, Clock } from 'lucide-react-native';

interface ChatConfirmationProps {
  categoryLabel: string;
  subCategoryLabel: string;
  onNewRequest: () => void;
}

export function ChatConfirmation({ 
  categoryLabel, 
  subCategoryLabel, 
  onNewRequest 
}: ChatConfirmationProps) {
  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'timing', duration: 400 }}
        style={styles.content}
      >
        <View style={styles.iconContainer}>
          <CheckCircle size={48} color="#10b981" />
        </View>

        <Text style={styles.title}>Demande envoyée !</Text>
        
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Catégorie</Text>
          <Text style={styles.summaryValue}>{categoryLabel}</Text>
          <View style={styles.divider} />
          <Text style={styles.summaryLabel}>Demande</Text>
          <Text style={styles.summaryValue}>{subCategoryLabel}</Text>
        </View>

        <MotiView
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 400, delay: 200 }}
          style={styles.timeCard}
        >
          <Clock size={20} color="#ef4146" />
          <View style={styles.timeContent}>
            <Text style={styles.timeTitle}>Délai de réponse</Text>
            <Text style={styles.timeValue}>L'agence vous recontactera sous 24h</Text>
          </View>
        </MotiView>

        <Text style={styles.infoText}>
          Un email de confirmation a été envoyé à l'agence de gestion. 
          Vous recevrez une notification dès qu'un conseiller prendra en charge votre demande.
        </Text>

        <Pressable style={styles.button} onPress={onNewRequest}>
          <Text style={styles.buttonText}>Nouvelle demande</Text>
        </Pressable>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ecfdf5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a373e',
    marginBottom: 24,
  },
  summaryCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 14,
    padding: 16,
    width: '100%',
    marginBottom: 16,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0a373e',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 12,
  },
  timeCard: {
    backgroundColor: '#fef2f2',
    borderRadius: 14,
    padding: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  timeContent: {
    flex: 1,
  },
  timeTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0a373e',
  },
  timeValue: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  infoText: {
    fontSize: 13,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#0a373e',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
