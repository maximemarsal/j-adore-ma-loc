import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { ChevronRight } from 'lucide-react-native';
import { Contract } from '@/constants/mockData';

interface ContractCardProps {
  contract: Contract;
  index: number;
  onPress: () => void;
}

export function ContractCard({ contract, index, onPress }: ContractCardProps) {
  return (
    <MotiView
      from={{ opacity: 0, translateX: -15 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{
        type: 'timing',
        duration: 350,
        delay: index * 60,
      }}
      style={styles.container}
    >
      <Pressable style={styles.card} onPress={onPress}>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: contract.logo }}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.provider}>{contract.provider}</Text>
          <Text style={styles.type}>{contract.type}</Text>
          {contract.price && (
            <Text style={styles.price}>{contract.price}</Text>
          )}
        </View>

        <View style={styles.right}>
          <View style={styles.statusBadge}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Actif</Text>
          </View>
          <ChevronRight size={18} color="#d1d5db" />
        </View>
      </Pressable>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    overflow: 'hidden',
  },
  logo: {
    width: 32,
    height: 32,
  },
  content: {
    flex: 1,
  },
  provider: {
    color: '#0a373e',
    fontSize: 15,
    fontWeight: 'bold',
  },
  type: {
    color: '#9ca3af',
    fontSize: 12,
    marginTop: 1,
  },
  price: {
    color: '#ef4146',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 4,
  },
  right: {
    alignItems: 'flex-end',
    gap: 8,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecfdf5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    gap: 4,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#10b981',
  },
  statusText: {
    color: '#059669',
    fontSize: 10,
    fontWeight: '600',
  },
});
