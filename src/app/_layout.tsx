import { Loading } from '@/components/loading';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native';

export default function Layout() {
  const [isFontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!isFontsLoaded) {
    return (
      <SafeAreaView className="flex-1 bg-slate-900 items-center justify-center">
        <Loading />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <Slot />
    </SafeAreaView>
  );
}
