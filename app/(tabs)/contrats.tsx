import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { FileText } from 'lucide-react-native';
import { Header } from '@/components/Header';
import { ContractCard } from '@/components/ContractCard';
import { ContractDetailModal } from '@/components/ContractDetailModal';
import { contracts, Contract } from '@/constants/mockData';

export default function ContratsScreen() {
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleContractPress = (contract: Contract) => {
    setSelectedContract(contract);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedContract(null);
  };

  return (
    <View style={styles.container}>
      <Header 
        title="J'adore Ma Loc" 
        subtitle="Mes contrats"
      />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <MotiView
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 400 }}
          style={styles.summaryCard}
        >
          <View>
            <Text style={styles.summaryLabel}>Dépenses mensuelles</Text>
            <Text style={styles.summaryValue}>236,99 €</Text>
          </View>
        </MotiView>

        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'timing', duration: 400, delay: 100 }}
          style={styles.titleRow}
        >
          <View style={styles.iconContainer}>
            <FileText size={16} color="#0a373e" />
          </View>
          <Text style={styles.listTitle}>
            {contracts.length} contrats actifs
          </Text>
        </MotiView>

        {contracts.map((contract, index) => (
          <ContractCard 
            key={contract.id} 
            contract={contract} 
            index={index}
            onPress={() => handleContractPress(contract)}
          />
        ))}

        <View style={styles.bottomSpacer} />
      </ScrollView>

      <ContractDetailModal
        contract={selectedContract}
        visible={modalVisible}
        onClose={handleCloseModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  summaryCard: {
    backgroundColor: '#0a373e',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  summaryLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  summaryValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  iconContainer: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
  },
  bottomSpacer: {
    height: 20,
  },
});
