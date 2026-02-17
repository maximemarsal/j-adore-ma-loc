import { StatusBar } from 'expo-status-bar';
import { Platform, View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { useRouter } from 'expo-router';
import { X } from 'lucide-react-native';

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      
      <View className="flex-row items-center justify-between p-4 border-b border-gray-100">
        <Text className="text-secondary text-lg font-bold">À propos</Text>
        <Pressable 
          onPress={() => router.back()}
          className="bg-gray-100 rounded-full p-2"
        >
          <X size={20} color="#0a373e" />
        </Pressable>
      </View>

      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 400 }}
        className="flex-1 p-6"
      >
        <View className="bg-secondary/5 rounded-2xl p-6 items-center">
          <View style={styles.logoContainer}>
            <Image
              source={require('@/assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text className="text-secondary text-xl font-bold text-center mt-4">
            J'adore Ma Loc
          </Text>
          <Text className="text-gray-500 text-center mt-2">
            L'application dédiée aux locataires pour centraliser vos avantages et gérer vos contrats.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-gray-400 text-xs uppercase font-bold mb-3 tracking-wide">
            Version démo
          </Text>
          <Text className="text-gray-600 text-sm">
            Cette application est une démonstration des fonctionnalités principales. 
            Les données affichées sont fictives.
          </Text>
        </View>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    width: 56,
    height: 56,
  },
});
