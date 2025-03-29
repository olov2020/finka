import { ThemedView } from "@/components/common/ThemedView";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function ForgotPasswordView() {
    return (
        <SafeAreaProvider>
            <ThemedView style={styles.container}>
                <SafeAreaView style={styles.innerContainer}>
                    <Text>Forgot password view</Text>

                    <Link style={styles.link} href="/(login)/(auth)">
                        Back to Login
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