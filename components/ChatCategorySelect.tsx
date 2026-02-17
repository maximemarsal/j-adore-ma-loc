import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { MotiView } from 'moti';
import {
  Wrench,
  FileText,
  CreditCard,
  DoorOpen,
  AlertTriangle,
  Building,
  Users,
  Shield,
  HelpCircle,
  LucideIcon,
} from 'lucide-react-native';
import { Category } from '@/constants/chatData';

interface ChatCategorySelectProps {
  categories: Category[];
  onSelect: (category: Category) => void;
}

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  FileText,
  CreditCard,
  DoorOpen,
  AlertTriangle,
  Building,
  Users,
  Shield,
  HelpCircle,
};

export function ChatCategorySelect({ categories, onSelect }: ChatCategorySelectProps) {
  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <MotiView
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 300 }}
      >
        <Text style={styles.title}>Comment pouvons-nous vous aider ?</Text>
        <Text style={styles.subtitle}>Sélectionnez une catégorie</Text>
      </MotiView>

      <View style={styles.grid}>
        {categories.map((category, index) => {
          const IconComponent = iconMap[category.icon] || HelpCircle;
          const isUrgency = category.type === 'urgency';
          const isMaintenance = category.type === 'maintenance';
          
          return (
            <MotiView
              key={category.id}
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: 'timing', duration: 300, delay: index * 50 }}
              style={styles.cardWrapper}
            >
              <Pressable
                style={[
                  styles.card, 
                  isUrgency && styles.urgencyCard,
                  isMaintenance && styles.maintenanceCard,
                ]}
                onPress={() => onSelect(category)}
              >
                <View style={[
                  styles.iconContainer, 
                  isUrgency && styles.urgencyIconContainer,
                  isMaintenance && styles.maintenanceIconContainer,
                ]}>
                  <IconComponent size={24} color={isUrgency ? '#ffffff' : isMaintenance ? '#ffffff' : '#0a373e'} />
                </View>
                <Text style={[
                  styles.cardLabel, 
                  isUrgency && styles.urgencyLabel,
                  isMaintenance && styles.maintenanceLabel,
                ]} numberOfLines={2}>
                  {category.label}
                </Text>
                {isMaintenance && (
                  <View style={styles.maintenanceBadge}>
                    <Text style={styles.maintenanceBadgeText}>+1000 artisans • réductions</Text>
                  </View>
                )}
              </Pressable>
            </MotiView>
          );
        })}
      </View>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0a373e',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '48%',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    minHeight: 120,
    justifyContent: 'center',
  },
  urgencyCard: {
    backgroundColor: '#ef4146',
  },
  maintenanceCard: {
    backgroundColor: '#0a373e',
    minHeight: 140,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  urgencyIconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  maintenanceIconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  cardLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0a373e',
    textAlign: 'center',
    minHeight: 32,
  },
  urgencyLabel: {
    color: '#ffffff',
  },
  maintenanceLabel: {
    color: '#ffffff',
  },
  maintenanceBadge: {
    backgroundColor: '#ef4146',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 8,
  },
  maintenanceBadgeText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: 'bold',
  },
});
