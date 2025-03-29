import {View, Text, TextInput, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import {usePathname} from "expo-router";
import BlankCard from "@/components/common/BlankCard";
import {titleTextStyle} from "@/constants/styles";
import TransactionItem from "@/components/transactions/TransactionItem";

type ListOfTransactionsProps = {
    transactionApi: () => Promise<void>;
    title: string;
}

type Spendings = {
    name: string;
    amount: number;
    amount_measure: string;
    price: number;
    date: string;
    categories: string[];
}

export default function ListOfTransactions({title, transactionApi}: ListOfTransactionsProps) {

    const [listOfTransactions, setListOfTransactions] = useState<Spendings[]>([
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
        {
            name: 'pizza',
            amount: 1,
            amount_measure: 'шт.',
            price: 123,
            date: '12.12.1212',
            categories: ['food'],
        },
    ]);
    const pathname = usePathname();

    useEffect(() => {
        const getAllSpendingsFunc = async () => {
            const data = await transactionApi();

        }

        getAllSpendingsFunc();
    }, [pathname]);

    return (
        <BlankCard flex={1}>
            <Text style={titleTextStyle.title}>{title}</Text>

            <View style={styles.container}>
                {listOfTransactions?.map((transaction) => (
                    <TransactionItem
                        name={transaction.name}
                        amount={transaction.amount}
                        amount_measure={transaction.amount_measure}
                        price={transaction.price}
                        categories={transaction.categories}
                        date={transaction.date}
                    />
                ))}
            </View>
        </BlankCard>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflowY: 'auto',
        gap: 8,
    }
});
