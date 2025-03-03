import {ThemedView} from "@/components/others/ThemedView";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {ThemedText} from "@/components/others/ThemedText";
import {StyleSheet, View} from "react-native";
import ShowTransactionsFromTimeToTimeToTime from "@/components/transactions/ShowTransactionsFromTimeToTime";
import {getSpendingsFromTime1ToTime2Api} from "@/api/spendingsApi";

export default function SpendingsView () {

    return (
        <SafeAreaProvider>
            <ThemedView style={styles.container}>
                <SafeAreaView style={styles.innerContainer}>
                    <ThemedText type="title">Траты</ThemedText>

                    <View>
                        <ShowTransactionsFromTimeToTimeToTime transactionApi={getSpendingsFromTime1ToTime2Api}/>
                    </View>
                </SafeAreaView>
            </ThemedView>
        </SafeAreaProvider>
    )
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
});