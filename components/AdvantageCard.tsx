import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { Advantage } from '@/constants/mockData';

interface AdvantageCardProps {
  advantage: Advantage;
  index: number;
  onPress: () => void;
}

export function AdvantageCard({ advantage, index, onPress }: AdvantageCardProps) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 15 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        type: 'timing',
        duration: 350,
        delay: index * 50,
      }}
      style={styles.container}
    >
      <Pressable style={styles.card} onPress={onPress}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: advantage.logo }}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{advantage.discount}</Text>
          </View>
        </View>
        <Text style={styles.brand}>{advantage.brand}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {advantage.description}
        </Text>
      </Pressable>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 14,
    padding: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  logoContainer: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logo: {
    width: 32,
    height: 32,
  },
  badge: {
    backgroundColor: '#ef4146',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  brand: {
    color: '#0a373e',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  description: {
    color: '#9ca3af',
    fontSize: 11,
  },
});
