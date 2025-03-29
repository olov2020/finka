import { ThemedView } from "@/components/common/ThemedView";
import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeView() {
    return (
        <SafeAreaProvider>
            <ThemedView style={styles.container}>
                <SafeAreaView style={styles.innerContainer}>
                    <Text>Home view</Text>

                    <Link style={styles.link} href="./(spendings)">
                        Траты
                    </Link>
                    <Link style={styles.link} href="/(main)/(account)">
                        Аккаунт
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