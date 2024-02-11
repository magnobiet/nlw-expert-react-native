import { formatCurrency } from '@/utils/functions/format-currency';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { ReactNode, useState } from 'react';
import { Alert, Linking, ScrollView, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '../components/button';
import { Header } from '../components/header';
import { Input } from '../components/input';
import { LinkButton } from '../components/link-button';
import { Product } from '../components/product';
import { ProductCartProps, useCartStore } from '../stores/cart-store';

const phoneNumber = '';

export default function CartScreen(): ReactNode {
  const cartStore = useCartStore();
  const navigation = useNavigation();
  const [address, setAddress] = useState<string>('');

  function handleProductRemove(product: Pick<ProductCartProps, 'id' | 'title'>) {
    Alert.alert('Remover', `Deseja remover ${product.title} do pedido?`, [
      { text: 'Cancelar' },
      { text: 'Remover', onPress: () => cartStore.remove(product.id) },
    ]);
  }

  function handleOrder() {
    if (!address.trim().length) {
      return Alert.alert('Pedido', 'Informe os dados da entrega.');
    }

    const order = cartStore.products.map((product) => `\n ${product.quantity}x | ${product.title}`).join('');

    const message = `🍔 NOVO PEDIDO

    Entregar em: ${address}

    ${order}

    Valor total: ${formatCurrency(cartStore.totalPrice)}`;

    Linking.openURL(`https://wa.me/55${phoneNumber}?text=${message}`);

    cartStore.reset();
    navigation.goBack();
  }

  return (
    <View className="flex-1 pt-12">
      <Header title="Resumo do pedido" />

      <KeyboardAwareScrollView showsHorizontalScrollIndicator={false} extraHeight={168}>
        <ScrollView>
          <View className="flex-1 p-5">
            {cartStore.hasItems ? (
              <View>
                {cartStore.products.map((product) => (
                  <Product key={product.id} data={product} onPress={() => handleProductRemove(product)} />
                ))}
              </View>
            ) : (
              <Text className="my-8 text-center font-body text-slate-400">Seu pedido esta sem nenhum produto</Text>
            )}

            <View className="mb-6 mt-5 flex-row items-center gap-4">
              <Text className="font-subtitle text-xl text-white">Total:</Text>
              <Text className="font-heading text-2xl text-lime-400">{formatCurrency(cartStore.totalPrice)}</Text>
            </View>

            <Input
              placeholder="Informe o endereço de entrega com rua, número, bairro e complemento"
              onChangeText={setAddress}
              onSubmitEditing={handleOrder}
              returnKeyType="next"
              blurOnSubmit
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>

      <View className="gap-5 p-5">
        <Button onPress={handleOrder}>
          <Button.Text>Enviar pedido</Button.Text>

          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>

        <LinkButton href="/">Voltar ao cardápio</LinkButton>
      </View>
    </View>
  );
}
