import { ReactNode } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import colors from 'tailwindcss/colors';

type InputProperties = TextInputProps & {};

export function Input({ ...properties }: Readonly<InputProperties>): ReactNode {
  return (
    <TextInput
      className="h-32 rounded-md bg-slate-800 px-4 py-3 font-body text-sm text-white"
      multiline
      textAlignVertical="top"
      placeholderTextColor={colors.slate[400]}
      {...properties}
    />
  );
}
