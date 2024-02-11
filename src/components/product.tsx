import { ReactNode, forwardRef } from 'react';
import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ProductDataProperties = {
  title: string;
  description: string;
  thumbnail: ImageProps;
};

type ProductProperties = TouchableOpacityProps & {
  data: ProductDataProperties;
};

export const Product = forwardRef<TouchableOpacity, Readonly<ProductProperties>>(
  ({ data: { title, description, thumbnail }, ...properties }, reference): ReactNode => {
    return (
      <TouchableOpacity className="w-full flex-row items-center gap-4 pb-4" ref={reference} {...properties}>
        <Image source={thumbnail} className="h-20 w-20 rounded-md" />

        <View>
          <Text className="flex-1 font-subtitle text-base text-slate-100">{title}</Text>
          <Text className="mt-0.5 text-xs leading-5 text-slate-400">{description}</Text>
        </View>
      </TouchableOpacity>
    );
  },
);
