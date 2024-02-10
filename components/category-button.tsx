import clsx from 'clsx';
import { Pressable, PressableProps, Text, View } from 'react-native';

type CategoryButtonProperties = PressableProps & {
  title: string;
  isSelected?: boolean;
};

export function CategoryButton({ title, isSelected, ...properties }: Readonly<CategoryButtonProperties>) {
  return (
    <Pressable
      className={clsx(
        'h-10 justify-center rounded-md border-2 border-slate-800 bg-slate-800 px-4',
        isSelected && 'border-2 border-lime-300',
      )}
      {...properties}
    >
      <View className="">
        <Text className="font-subtitle text-sm text-slate-100">{title}</Text>
      </View>
    </Pressable>
  );
}
