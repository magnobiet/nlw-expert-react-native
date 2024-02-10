import { CategoryButton } from '@/components/category-button';
import { Header } from '@/components/header';
import { CATEGORIES } from '@/utils/data/products';
import { ReactElement, useState } from 'react';
import { FlatList, View } from 'react-native';

export default function Home(): ReactElement {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0]);

  function handleCategorySelect(category: string): void {
    setSelectedCategory(category);
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={5} />

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
    </View>
  );
}
