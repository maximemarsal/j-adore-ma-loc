import { Link, Stack } from 'expo-router';
import { View, Text, Pressable } from 'react-native';
import { MotiView } from 'moti';
import { Home, AlertCircle } from 'lucide-react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Page introuvable' }} />
      <View className="flex-1 bg-gray-50 items-center justify-center p-6">
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'timing', duration: 400 }}
          className="items-center"
        >
          <View className="bg-primary/10 rounded-full p-6 mb-6">
            <AlertCircle size={48} color="#ef4146" />
          </View>
          <Text className="text-secondary text-2xl font-bold text-center mb-2">
            Page introuvable
          </Text>
          <Text className="text-gray-500 text-center mb-8">
            Cette page n'existe pas ou a été déplacée.
          </Text>

          <Link href="/" asChild>
            <Pressable className="bg-primary flex-row items-center gap-2 px-6 py-4 rounded-xl">
              <Home size={20} color="#ffffff" />
              <Text className="text-white font-bold">Retour à l'accueil</Text>
            </Pressable>
          </Link>
        </MotiView>
      </View>
    </>
  );
}
