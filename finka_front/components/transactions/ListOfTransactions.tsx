import {View, Text, TextInput, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import {usePathname} from "expo-router";
import BlankCard from "@/components/common/BlankCard";

type ListOfTransactionsProps = {
    transactionApi: () => Promise<void>;
    title: string;
}

type Spendings = {
    name: string;
    amount: number;
    amount_measure: string;
    price: string;
    date: string;
    categories: string[];
}

export default function ListOfTransactions({title, transactionApi}: ListOfTransactionsProps) {

    const [listOfTransactions, setListOfTransactions] = useState<Spendings[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        const getAllSpendingsFunc = async () => {
            const data = await transactionApi();

        }

        getAllSpendingsFunc();
    }, [pathname]);

    return (
        <BlankCard>
            <Text>{title}</Text>

            <View>

            </View>
        </BlankCard>
    );
}