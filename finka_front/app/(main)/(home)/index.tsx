import {ThemedView} from "@/components/common/ThemedView";
import {Link} from "expo-router";
import {StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {ThemedText} from "@/components/common/ThemedText";

export default function HomeView() {
  return (
    <SafeAreaProvider>
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.innerContainer}>
          <View>
            <ThemedText fontSize={24}>Добро пожаловать в Finka!</ThemedText>
            <ThemedText fontSize={16}>Приложение для учета личных финансов</ThemedText>
          </View>

          <Link style={styles.link} href="./(spendings)">
            <ThemedText>
              Траты
            </ThemedText>
          </Link>
          <Link style={styles.link} href="./(earnings)">
            <ThemedText>
              Заработок
            </ThemedText>
          </Link>
          <Link style={styles.link} href="./(balance)">
            <ThemedText>
              Остаток
            </ThemedText>
          </Link>
          <Link style={styles.link} href="./(savings)">
            <ThemedText>
              Копилка
            </ThemedText>
          </Link>
          <Link style={styles.link} href="./(reminder)">
            <ThemedText>
              Напоминания
            </ThemedText>
          </Link>

          <Link style={styles.link} href="../(account)">
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