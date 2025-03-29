import {View, Text, TextInput, StyleSheet} from "react-native";
import {useState} from "react";

type TransactionItemProps = {
    name: string;
    amount: number;
    amount_measure: string;
    price: number;
    date: string;
    categories: string[];
}

export default function TransactionItem({name, amount, amount_measure, categories, price, date}: TransactionItemProps) {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.mainText}>{name} {amount} {amount_measure} - {price}р</Text>
                </View>
                {categories?.map((category) => (
                    <Text style={styles.category}>{category}</Text>
                ))}
            </View>
            <Text>{date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 16,
        fontWeight: 400,
    },
    category: {
        color: 'rgba(187, 193, 197, 1)',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    }
});
