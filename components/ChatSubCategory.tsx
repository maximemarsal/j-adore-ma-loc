import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, TextInput } from 'react-native';
import { MotiView } from 'moti';
import { ChevronRight, MessageSquare } from 'lucide-react-native';
import { SubCategory } from '@/constants/chatData';

interface ChatSubCategoryProps {
  categoryLabel: string;
  subCategories: SubCategory[];
  onSelect: (subCategory: SubCategory, comment: string) => void;
  onBack: () => void;
}

export function ChatSubCategory({ 
  categoryLabel, 
  subCategories, 
  onSelect, 
  onBack 
}: ChatSubCategoryProps) {
  const [selectedSub, setSelectedSub] = useState<SubCategory | null>(null);
  const [comment, setComment] = useState('');
  const [showComment, setShowComment] = useState(false);

  const handleSelect = (sub: SubCategory) => {
    setSelectedSub(sub);
    setShowComment(true);
  };

  const handleSubmit = () => {
    if (selectedSub) {
      onSelect(selectedSub, comment);
    }
  };

  if (showComment && selectedSub) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <MotiView
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 300 }}
        >
          <Text style={styles.title}>{selectedSub.label}</Text>
          <Text style={styles.subtitle}>Ajoutez un commentaire (optionnel)</Text>

          <View style={styles.commentBox}>
            <MessageSquare size={20} color="#9ca3af" style={styles.commentIcon} />
            <TextInput
              style={styles.commentInput}
              placeholder="Décrivez votre demande..."
              placeholderTextColor="#9ca3af"
              multiline
              numberOfLines={4}
              value={comment}
              onChangeText={setComment}
              textAlignVertical="top"
            />
          </View>

          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Envoyer ma demande</Text>
          </Pressable>

          <Pressable style={styles.backButton} onPress={() => setShowComment(false)}>
            <Text style={styles.backButtonText}>Retour</Text>
          </Pressable>
        </MotiView>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <MotiView
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 300 }}
      >
        <Pressable style={styles.backLink} onPress={onBack}>
          <Text style={styles.backLinkText}>← Retour</Text>
        </Pressable>
        
        <Text style={styles.title}>{categoryLabel}</Text>
        <Text style={styles.subtitle}>Précisez votre demande</Text>
      </MotiView>

      {subCategories.map((sub, index) => (
        <MotiView
          key={sub.id}
          from={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ type: 'timing', duration: 300, delay: index * 50 }}
        >
          <Pressable style={styles.optionCard} onPress={() => handleSelect(sub)}>
            <Text style={styles.optionLabel}>{sub.label}</Text>
            <ChevronRight size={20} color="#9ca3af" />
          </Pressable>
        </MotiView>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  backLink: {
    marginBottom: 16,
  },
  backLinkText: {
    fontSize: 14,
    color: '#ef4146',
    fontWeight: '600',
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
    marginBottom: 20,
  },
  optionCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionLabel: {
    fontSize: 14,
    color: '#0a373e',
    flex: 1,
  },
  commentBox: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    minHeight: 120,
  },
  commentIcon: {
    marginBottom: 8,
  },
  commentInput: {
    fontSize: 14,
    color: '#0a373e',
    minHeight: 80,
  },
  submitButton: {
    backgroundColor: '#ef4146',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 12,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#6b7280',
    fontSize: 14,
  },
});
