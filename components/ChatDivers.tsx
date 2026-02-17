import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import { MotiView } from 'moti';
import { ArrowLeft, MessageSquare } from 'lucide-react-native';

interface ChatDiversProps {
  onBack: () => void;
  onSubmit: (message: string) => void;
}

export function ChatDivers({ onBack, onSubmit }: ChatDiversProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim()) {
      onSubmit(message);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backLink} onPress={onBack}>
        <ArrowLeft size={20} color="#ef4146" />
        <Text style={styles.backLinkText}>Retour</Text>
      </Pressable>

      <MotiView
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 300 }}
      >
        <Text style={styles.title}>Autre demande</Text>
        <Text style={styles.subtitle}>Décrivez votre demande en détail</Text>

        <View style={styles.messageBox}>
          <MessageSquare size={20} color="#9ca3af" style={styles.messageIcon} />
          <TextInput
            style={styles.messageInput}
            placeholder="Écrivez votre message ici..."
            placeholderTextColor="#9ca3af"
            multiline
            numberOfLines={6}
            value={message}
            onChangeText={setMessage}
            textAlignVertical="top"
          />
        </View>

        <Pressable 
          style={[styles.submitButton, !message.trim() && styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={!message.trim()}
        >
          <Text style={styles.submitButtonText}>Envoyer ma demande</Text>
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
  backLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
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
  messageBox: {
    backgroundColor: '#f8f9fa',
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    minHeight: 180,
  },
  messageIcon: {
    marginBottom: 10,
  },
  messageInput: {
    fontSize: 14,
    color: '#0a373e',
    minHeight: 140,
  },
  submitButton: {
    backgroundColor: '#ef4146',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#d1d5db',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
