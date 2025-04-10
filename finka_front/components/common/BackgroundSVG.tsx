import React from 'react';
import {ImageBackground,  StyleSheet, type ViewProps} from "react-native";

export default function Background({children}: ViewProps) {
  return (
    <ImageBackground
      source={require('@/assets/images/background.svg')}
      style={styles.backgroundImage}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});
