import { ReactNode } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProperties = TouchableOpacityProps & {
  children: ReactNode;
};

type ButtonTextProperties = {
  children: ReactNode;
};

type ButtonIconProperties = {
  children: ReactNode;
};

function Button({ children, ...properties }: Readonly<ButtonProperties>): ReactNode {
  return (
    <TouchableOpacity
      className="h-12 flex-row items-center justify-center rounded-md bg-lime-400"
      activeOpacity={0.7}
      {...properties}
    >
      {children}
    </TouchableOpacity>
  );
}

function ButtonText({ children }: Readonly<ButtonTextProperties>): ReactNode {
  return <Text className="mx-2 font-heading text-base text-black">{children}</Text>;
}

function ButtonIcon({ children }: Readonly<ButtonIconProperties>): ReactNode {
  return children;
}

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export { Button };
