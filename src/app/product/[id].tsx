import { Button } from '@/src/components/button';
import { Header } from '@/src/components/header';
import { LinkButton } from '@/src/components/link-button';
import { PRODUCTS } from '@/utils/data/products';
import { formatCurrency } from '@/utils/functions/format-currency';
import { Feather } from '@expo/vector-icons';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { ReactNode } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useCartStore } from './../../stores/cart-store';

export default function ProductScreen(): ReactNode {
  const cartStore = useCartStore();
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();

  const product = PRODUCTS.find((item) => item.id === id);

  function handleAddToCart() {
    cartStore.add(product!);

    navigation.goBack();
  }

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="flex-1 pt-12">
      <Header title={product!.title} />

      <Image source={product!.cover} className="h-52 w-full" resizeMode="cover"></Image>

      <ScrollView className="my-6 flex-1 p-5">
        <Text className="my-2 font-heading text-2xl text-lime-400">{formatCurrency(product!.price)}</Text>

        <Text className="mb-6 font-body text-base leading-6 text-slate-400">{product!.description}</Text>

        {product?.ingredients.map((ingredient) => (
          <Text key={ingredient} className="font-body text-base leading-6 text-slate-400">
            {'\u2022'} {ingredient}
          </Text>
        ))}
      </ScrollView>

      <View className="gap-5 p-5 pb-8">
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>

          <Button.Text>Adicionar ao pedido</Button.Text>
        </Button>

        <LinkButton href="/">Voltar ao cardápio</LinkButton>
      </View>
    </View>
  );
}
