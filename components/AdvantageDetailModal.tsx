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
import { X, Copy, Calendar, Tag, Check } from 'lucide-react-native';
import { Advantage } from '@/constants/mockData';

interface AdvantageDetailModalProps {
  advantage: Advantage | null;
  visible: boolean;
  onClose: () => void;
}

export function AdvantageDetailModal({
  advantage,
  visible,
  onClose,
}: AdvantageDetailModalProps) {
  const [copied, setCopied] = React.useState(false);

  if (!advantage) return null;

  const handleCopyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Détails de l'offre</Text>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <X size={20} color="#0a373e" />
          </Pressable>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'timing', duration: 400 }}
          >
            <Image
              source={{ uri: advantage.image }}
              style={styles.heroImage}
              resizeMode="cover"
            />
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 400, delay: 100 }}
            style={styles.brandCard}
          >
            <View style={styles.brandHeader}>
              <View style={styles.logoContainer}>
                <Image
                  source={{ uri: advantage.logo }}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.brandInfo}>
                <Text style={styles.brandName}>{advantage.brand}</Text>
                <Text style={styles.category}>{advantage.category}</Text>
              </View>
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{advantage.discount}</Text>
              </View>
            </View>
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 400, delay: 200 }}
          >
            <Text style={styles.sectionTitle}>Description</Text>
            <View style={styles.descriptionCard}>
              <Text style={styles.description}>{advantage.fullDescription}</Text>
            </View>
          </MotiView>

          {advantage.code && (
            <MotiView
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: 'timing', duration: 400, delay: 300 }}
            >
              <Text style={styles.sectionTitle}>Code promo</Text>
              <Pressable style={styles.codeCard} onPress={handleCopyCode}>
                <View style={styles.codeContent}>
                  <Tag size={20} color="#ef4146" />
                  <Text style={styles.codeText}>{advantage.code}</Text>
                </View>
                <View style={[styles.copyButton, copied && styles.copyButtonSuccess]}>
                  {copied ? (
                    <Check size={18} color="#ffffff" />
                  ) : (
                    <Copy size={18} color="#ffffff" />
                  )}
                </View>
              </Pressable>
              {copied && (
                <Text style={styles.copiedText}>Code copié !</Text>
              )}
            </MotiView>
          )}

          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 400, delay: 400 }}
          >
            <Text style={styles.sectionTitle}>Validité</Text>
            <View style={styles.validityCard}>
              <Calendar size={20} color="#6b7280" />
              <Text style={styles.validityText}>
                Offre valable jusqu'au {advantage.validUntil}
              </Text>
            </View>
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 400, delay: 500 }}
          >
            <Pressable style={styles.useButton}>
              <Text style={styles.useButtonText}>Utiliser cette offre</Text>
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
  },
  heroImage: {
    width: '100%',
    height: 200,
  },
  brandCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginTop: -30,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  brandHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logo: {
    width: 40,
    height: 40,
  },
  brandInfo: {
    flex: 1,
    marginLeft: 12,
  },
  brandName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0a373e',
  },
  category: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 2,
  },
  discountBadge: {
    backgroundColor: '#ef4146',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  discountText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0a373e',
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 12,
  },
  descriptionCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#4b5563',
  },
  codeCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#ef4146',
    borderStyle: 'dashed',
  },
  codeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  codeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0a373e',
    letterSpacing: 2,
  },
  copyButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#ef4146',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyButtonSuccess: {
    backgroundColor: '#16a34a',
  },
  copiedText: {
    fontSize: 12,
    color: '#16a34a',
    fontWeight: '600',
    marginHorizontal: 16,
    marginTop: 8,
  },
  validityCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  validityText: {
    fontSize: 14,
    color: '#4b5563',
  },
  useButton: {
    backgroundColor: '#ef4146',
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
  },
  useButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSpacer: {
    height: 40,
  },
});
