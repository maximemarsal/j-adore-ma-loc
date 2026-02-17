import React from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { MotiView } from 'moti';
import { X, FileText, Download, Calendar, CreditCard } from 'lucide-react-native';
import { Contract } from '@/constants/mockData';

interface ContractDetailModalProps {
  contract: Contract | null;
  visible: boolean;
  onClose: () => void;
}

export function ContractDetailModal({
  contract,
  visible,
  onClose,
}: ContractDetailModalProps) {
  if (!contract) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Détails du contrat</Text>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <X size={20} color="#0a373e" />
          </Pressable>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 400 }}
          >
            <View style={styles.providerCard}>
              <View style={styles.logoContainer}>
                <Image
                  source={{ uri: contract.logo }}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.providerName}>{contract.provider}</Text>
              <Text style={styles.contractType}>{contract.type}</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>Contrat Actif</Text>
              </View>
            </View>
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 400, delay: 100 }}
          >
            <Text style={styles.sectionTitle}>Informations</Text>
            <View style={styles.infoCard}>
              <View style={styles.infoRow}>
                <View style={styles.infoIcon}>
                  <CreditCard size={18} color="#ef4146" />
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>Mensualité</Text>
                  <Text style={styles.infoValue}>{contract.price || 'N/A'}</Text>
                </View>
              </View>
              <View style={styles.divider} />
              <View style={styles.infoRow}>
                <View style={styles.infoIcon}>
                  <Calendar size={18} color="#ef4146" />
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>Prochaine échéance</Text>
                  <Text style={styles.infoValue}>
                    {contract.nextDate || 'Prélèvement automatique'}
                  </Text>
                </View>
              </View>
              <View style={styles.divider} />
              <View style={styles.infoRow}>
                <View style={styles.infoIcon}>
                  <FileText size={18} color="#ef4146" />
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>Référence contrat</Text>
                  <Text style={styles.infoValue}>CTR-2024-{contract.id}847</Text>
                </View>
              </View>
            </View>
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 400, delay: 200 }}
          >
            <Text style={styles.sectionTitle}>Documents</Text>
            <Pressable style={styles.documentCard}>
              <View style={styles.pdfIcon}>
                <FileText size={24} color="#ef4146" />
              </View>
              <View style={styles.documentContent}>
                <Text style={styles.documentName}>
                  Contrat_{contract.provider}_2024.pdf
                </Text>
                <Text style={styles.documentSize}>245 Ko • PDF</Text>
              </View>
              <View style={styles.downloadButton}>
                <Download size={18} color="#ffffff" />
              </View>
            </Pressable>

            <Pressable style={styles.documentCard}>
              <View style={styles.pdfIcon}>
                <FileText size={24} color="#ef4146" />
              </View>
              <View style={styles.documentContent}>
                <Text style={styles.documentName}>
                  Facture_Janvier_2026.pdf
                </Text>
                <Text style={styles.documentSize}>128 Ko • PDF</Text>
              </View>
              <View style={styles.downloadButton}>
                <Download size={18} color="#ffffff" />
              </View>
            </Pressable>

            <Pressable style={styles.documentCard}>
              <View style={styles.pdfIcon}>
                <FileText size={24} color="#ef4146" />
              </View>
              <View style={styles.documentContent}>
                <Text style={styles.documentName}>
                  Facture_Décembre_2025.pdf
                </Text>
                <Text style={styles.documentSize}>132 Ko • PDF</Text>
              </View>
              <View style={styles.downloadButton}>
                <Download size={18} color="#ffffff" />
              </View>
            </Pressable>
          </MotiView>

          <View style={styles.bottomSpacer} />
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0a373e',
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  providerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 56,
    height: 56,
  },
  providerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a373e',
    marginBottom: 4,
  },
  contractType: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  statusBadge: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  statusText: {
    color: '#16a34a',
    fontSize: 13,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0a373e',
    marginBottom: 12,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fef2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0a373e',
  },
  divider: {
    height: 1,
    backgroundColor: '#f3f4f6',
  },
  documentCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  pdfIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#fef2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  documentContent: {
    flex: 1,
  },
  documentName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0a373e',
    marginBottom: 2,
  },
  documentSize: {
    fontSize: 12,
    color: '#9ca3af',
  },
  downloadButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#ef4146',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSpacer: {
    height: 40,
  },
});
