import { Feather } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from 'tailwindcss/colors';
import { useCartStore } from '../stores/cart-store';

export function CartCounter(): ReactNode {
  const cartStore = useCartStore();
  const cartQuantityItems = cartStore.products.reduce((total, { quantity }) => total + quantity, 0);

  return (
    <>
      {cartQuantityItems > 0 && (
        <TouchableOpacity className="relative" activeOpacity={0.7}>
          <View className="-right-3.5 top-2 z-10 h-4 w-4 items-center justify-center rounded-full bg-lime-300">
            <Text className="text-xs font-bold text-slate-900">{cartQuantityItems}</Text>
          </View>

          <Feather name="shopping-bag" color={colors.white} size={24} />
        </TouchableOpacity>
      )}
    </>
  );
}
