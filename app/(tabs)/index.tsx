import React, { useState, useMemo } from 'react';
import { View, ScrollView, Text, StyleSheet, Pressable } from 'react-native';
import { MotiView } from 'moti';
import { 
  Grid, Home, Shirt, Dumbbell, UtensilsCrossed, Smartphone, 
  Sparkles, Play, ShoppingCart, BookOpen, Plane, Wrench, LucideIcon 
} from 'lucide-react-native';
import { Header } from '@/components/Header';
import { AdvantageCard } from '@/components/AdvantageCard';
import { AdvantageDetailModal } from '@/components/AdvantageDetailModal';
import { advantages, advantageCategories, Advantage } from '@/constants/mockData';

const iconMap: Record<string, LucideIcon> = {
  Grid,
  Home,
  Shirt,
  Dumbbell,
  UtensilsCrossed,
  Smartphone,
  Sparkles,
  Play,
  ShoppingCart,
  BookOpen,
  Plane,
  Wrench,
};

export default function AvantagesScreen() {
  const [selectedAdvantage, setSelectedAdvantage] = useState<Advantage | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredAdvantages = useMemo(() => {
    if (selectedCategory === 'all') {
      return advantages;
    }
    return advantages.filter(adv => adv.category === selectedCategory);
  }, [selectedCategory]);

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
      
      {/* Category Filter */}
      <View style={styles.categoryContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {advantageCategories.map((cat, index) => {
            const IconComponent = iconMap[cat.icon] || Grid;
            const isSelected = selectedCategory === cat.id;
            
            return (
              <MotiView
                key={cat.id}
                from={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'timing', duration: 300, delay: index * 30 }}
              >
                <Pressable
                  style={[styles.categoryPill, isSelected && styles.categoryPillSelected]}
                  onPress={() => setSelectedCategory(cat.id)}
                >
                  <IconComponent size={14} color={isSelected ? '#ffffff' : '#6b7280'} />
                  <Text style={[styles.categoryText, isSelected && styles.categoryTextSelected]}>
                    {cat.label}
                  </Text>
                </Pressable>
              </MotiView>
            );
          })}
        </ScrollView>
      </View>

      {/* Count Badge */}
      <View style={styles.countContainer}>
        <Text style={styles.countText}>
          {filteredAdvantages.length} réduction{filteredAdvantages.length > 1 ? 's' : ''} disponible{filteredAdvantages.length > 1 ? 's' : ''}
        </Text>
      </View>
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {filteredAdvantages.map((advantage, index) => (
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
  categoryContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  categoryScroll: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
    marginRight: 8,
  },
  categoryPillSelected: {
    backgroundColor: '#ef4146',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6b7280',
  },
  categoryTextSelected: {
    color: '#ffffff',
  },
  countContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
  },
  countText: {
    fontSize: 13,
    color: '#9ca3af',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingTop: 8,
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
