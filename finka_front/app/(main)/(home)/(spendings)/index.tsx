import {ThemedView} from "@/components/common/ThemedView";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, View, Text} from "react-native";
import TransactionsFromTimeToTime from "@/components/transactions/TransactionsFromTimeToTime";
import {getAllSpendingsApi, getSpendingsFromTime1ToTime2Api} from "@/api/spendingsApi";
import AddTransactionButton from "@/components/transactions/AddTransactionButton";
import ListOfTransactions from "@/components/transactions/ListOfTransactions";
import {safeAreaViewStyle} from '@/constants/styles';

export default function SpendingsView() {
    return (
        <SafeAreaProvider>
            <ThemedView>
                <SafeAreaView style={safeAreaViewStyle.safeAreaView}>
                    <Text>Spendings view</Text>
                    <TransactionsFromTimeToTime
                        title="Траты"
                        transactionApi={getSpendingsFromTime1ToTime2Api}
                    />

                    <AddTransactionButton
                        title="Добавить траты"
                        onPress={() => {
                        }}
                    />

                    <ListOfTransactions
                        title="Список трат"
                        transactionApi={getAllSpendingsApi}
                    />
                </SafeAreaView>
            </ThemedView>
        </SafeAreaProvider>
    );
}
