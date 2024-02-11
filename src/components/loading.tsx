import { ReactElement } from 'react';
import { ActivityIndicator } from 'react-native';
import colors from 'tailwindcss/colors';

export function Loading(): ReactElement {
  return <ActivityIndicator color={colors.white} size="large" />;
}
