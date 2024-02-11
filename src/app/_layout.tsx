import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { Slot } from 'expo-router';
import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';
import { Loading } from '../components/loading';

export default function Layout(): ReactNode {
  const [isFontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!isFontsLoaded) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-slate-900">
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
