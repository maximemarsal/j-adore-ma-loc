import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { Header } from '@/components/Header';
import { AdvantageCard } from '@/components/AdvantageCard';
import { AdvantageDetailModal } from '@/components/AdvantageDetailModal';
import { advantages, Advantage } from '@/constants/mockData';

export default function AvantagesScreen() {
  const [selectedAdvantage, setSelectedAdvantage] = useState<Advantage | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAdvantagePress = (advantage: Advantage) => {
    setSelectedAdvantage(advantage);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedAdvantage(null);
  };

  return (
    <View style={styles.container}>
      <Header 
        title="J'adore Ma Loc" 
        subtitle="Mes avantages"
      />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {advantages.map((advantage, index) => (
            <AdvantageCard 
              key={advantage.id} 
              advantage={advantage} 
              index={index}
              onPress={() => handleAdvantagePress(advantage)}
            />
          ))}
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      <AdvantageDetailModal
        advantage={selectedAdvantage}
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bottomSpacer: {
    height: 20,
  },
});
