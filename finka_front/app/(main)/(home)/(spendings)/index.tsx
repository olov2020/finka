import {ThemedView} from "@/components/common/ThemedView";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, View, Text} from "react-native";
import TransactionsFromTimeToTime from "@/components/transactions/TransactionsFromTimeToTime";
import {getAllSpendingsApi, getSpendingsFromTime1ToTime2Api} from "@/api/spendingsApi";
import Button from "@/components/common/Button";
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

                    <Button
                        title="Добавить траты"
                        icon={
                            <Text>+</Text>
                        }
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
