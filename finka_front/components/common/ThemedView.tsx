import React from 'react';
import { ImageBackground, StyleSheet, View, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { themedViewStyle } from "@/constants/styles";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <ImageBackground
      source={require('@/assets/images/background.svg')}
      style={styles.backgroundImage}
    >
      <View style={[themedViewStyle.themedView, style]} {...otherProps} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
