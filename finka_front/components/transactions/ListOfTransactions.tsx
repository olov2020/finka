import {View, Text, TextInput, StyleSheet, ScrollView} from "react-native";
import React, {useEffect, useState} from "react";
import {usePathname} from "expo-router";
import BlankCard from "@/components/common/BlankCard";
import {titleTextStyle} from "@/constants/styles";
import TransactionItem from "@/components/transactions/TransactionItem";
import {TransactionItemProps} from "@/types/TransactionItem.type";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/app/(main)/(home)/(spendings)/_layout";
import {themedTextStyle} from "@/constants/styles/themedTextStyle";

type ListOfTransactionsProps = {
  transactionApi: () => Promise<void>;
  title: string;
  navigation: StackNavigationProp<RootStackParamList, 'Spendings'>;
}

export default function ListOfTransactions({title, transactionApi, navigation}: ListOfTransactionsProps) {

  const [listOfTransactions, setListOfTransactions] = useState<TransactionItemProps[]>([
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
    {
      name: 'pizza',
      amount: 1,
      amount_measure: 'шт.',
      price: 123,
      date: '12.12.1212',
      categories: ['food'],
      time: '12:23',
    },
  ]);
  const pathname = usePathname();

  /*useEffect(() => {
      const getAllSpendingsFunc = async () => {
          const data = await transactionApi();

      }

      getAllSpendingsFunc();
  }, [pathname]);*/

  return (
    <BlankCard flex={1}>
      <Text style={themedTextStyle.text}>{title}</Text>

      <View style={styles.container}>
        {listOfTransactions?.map((transaction) => (
          <TransactionItem
            name={transaction.name}
            amount={transaction.amount}
            amount_measure={transaction.amount_measure}
            price={transaction.price}
            categories={transaction.categories}
            date={transaction.date}
            time={transaction.time}
            navigation={navigation}
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
