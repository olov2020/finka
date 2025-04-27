import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/common/ThemedView';
import {ThemedText} from "@/components/common/ThemedText";

export default function NotFoundScreen() {
  return (
      <>
        <Stack.Screen options={{ title: 'Ууупс!' }} />
        <ThemedView style={styles.container}>
          <ThemedText fontSize={24}>Этот экран не существует</ThemedText>
          <Link href="/" style={styles.link}>
            <ThemedText>Вернуться домой</ThemedText>
          </Link>
        </ThemedView>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
