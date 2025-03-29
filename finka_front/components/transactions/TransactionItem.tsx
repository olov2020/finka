import {View, Text, TextInput, StyleSheet} from "react-native";
import {useState} from "react";

type TransactionItemProps = {
    name: string;
    count: string;
    count_measure: string;
    amount: string;
    categories: string[];
    date: string;
}

export default function TransactionItem({name, count, count_measure, amount, categories, date}: TransactionItemProps) {
    return (
        <View>
            <View>
                <View>
                    <Text style={styles.mainText}>{name} {count} {count_measure} - {amount}р</Text>
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
    }
});
