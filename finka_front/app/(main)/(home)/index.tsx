import { ThemedText } from "@/components/others/ThemedText";
import { ThemedView } from "@/components/others/ThemedView";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeView() {
    return (
        <SafeAreaProvider>
            <ThemedView style={styles.container}>
                <SafeAreaView style={styles.innerContainer}>
                    <ThemedText type="title">Home view</ThemedText>

                    <Link style={styles.link} href="./spendings">
                        Траты
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