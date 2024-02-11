import { CATEGORIES, MENU, ProductProps } from '@/utils/data/products';
import { Link } from 'expo-router';
import { ReactNode, useRef, useState } from 'react';
import { FlatList, SectionList, Text, View } from 'react-native';
import { CategoryButton } from '../components/category-button';
import { Header } from '../components/header';
import { Product } from '../components/product';

export default function HomeScreen(): ReactNode {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0]);
  const sectionListReference = useRef<SectionList<ProductProps>>(null);

  function handleCategorySelect(category: string): void {
    setSelectedCategory(category);

    if (sectionListReference.current) {
      sectionListReference.current.scrollToLocation({
        animated: true,
        itemIndex: 0,
        sectionIndex: CATEGORIES.findIndex((category) => category === selectedCategory),
      });
    }
  }

  return (
    <View className="flex-1 pt-12">
      <Header title="Faça seu pedido" withCartCounter />

      <View className="flex-1 flex-col gap-8 pt-8">
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CategoryButton
              title={item}
              isSelected={item === selectedCategory}
              onPress={() => handleCategorySelect(item)}
            />
          )}
          horizontal
          className="mt-5 max-h-10"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        />

        <SectionList
          ref={sectionListReference}
          sections={MENU}
          keyExtractor={({ id }) => id}
          stickySectionHeadersEnabled={false}
          renderItem={({ item }) => (
            <Link href={`/product/${item.id}`} asChild>
              <Product data={item} />
            </Link>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text className="mb-3 mt-8 font-heading text-xl text-white">{title}</Text>
          )}
          className="flex-1 p-5"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 96 }}
        />
      </View>
    </View>
  );
}
