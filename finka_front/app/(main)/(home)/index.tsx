import {ThemedView} from "@/components/common/ThemedView";
import {Link} from "expo-router";
import {StyleSheet, Text} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {ThemedText} from "@/components/common/ThemedText";

export default function HomeView() {
  return (
    <SafeAreaProvider>
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.innerContainer}>
          <ThemedText>Home view</ThemedText>

          <Link style={styles.link} href="./(spendings)">
            <ThemedText>
              Траты
            </ThemedText>
          </Link>
          <Link style={styles.link} href="/(main)/(account)">
            <ThemedText>
              Аккаунт
            </ThemedText>
          </Link>
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
  },
});