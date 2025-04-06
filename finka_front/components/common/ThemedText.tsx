import React from 'react';
import { type ViewProps, Text, TextProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { themedTextStyle } from "@/constants/styles/themedTextStyle";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedText({ style, lightColor, darkColor, ...otherProps }: ThemedTextProps) {
  const textColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text style={[themedTextStyle.text, { color: textColor }, style]} {...otherProps} />
  );
}
