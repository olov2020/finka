import React from 'react';
import {Text, type TextProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { themedTextStyle } from "@/constants/styles/themedTextStyle";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  fontSize?: number;
};

export function ThemedText({ style, lightColor, darkColor, fontSize, ...otherProps }: ThemedTextProps) {
  const textColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text style={[themedTextStyle.text, { color: textColor, fontSize: fontSize }, style]} {...otherProps} />
  );
}
