import { ReactNode } from 'react';
import { Image, Text, View } from 'react-native';
import { CartCounter } from './cart-counter';

type HeaderProperties = {
  title: string;
  withCartCounter?: boolean;
};

export function Header({ title, withCartCounter }: Readonly<HeaderProperties>): ReactNode {
  return (
    <View className="mx-5 flex-row items-center border-b border-slate-700 pb-5">
      <View className="flex-1">
        <Image source={require('@/src/assets/logo.png')} className="h-6 w-32" />

        <Text className="mt-2 font-heading text-xl text-white">{title}</Text>
      </View>

      {withCartCounter && <CartCounter />}
    </View>
  );
}
