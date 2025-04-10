import {View, Text, StyleSheet} from "react-native";
import React, {useState} from "react";
import BlankCard from "@/components/common/BlankCard";
import SpendingsItem from "@/app/(main)/(home)/(spendings)/SpendingsItem";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "./_layout";
import {themedTextStyle} from "@/constants/styles/themedTextStyle";
import BalanceItem from "@/app/(main)/(home)/(balance)/BalanceItem";

type ListOfTransactionsProps = {
  title: string;
  data: any[] | undefined;
  navigation: StackNavigationProp<RootStackParamList, 'Balance'>;
}

export default function ListOfBalance({title, navigation, data}: ListOfTransactionsProps) {
  data = [
    {
      id: 0,
      name: 'Остаток1',
      balance: '123',
      start_date: '01.04.2025',
      end_date: '10.04.2025',
      time: '12:23 01.04.2025',
    },
  ];

  return (
    <BlankCard flex={1}>
      <Text style={themedTextStyle.text}>{title}</Text>

      <View style={styles.container}>
        {data?.map((transaction) => (
          <BalanceItem
            id={transaction.id}
            name={transaction.name}
            balance={transaction.balance}
            start_date={transaction.start_date}
            end_date={transaction.end_date}
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
