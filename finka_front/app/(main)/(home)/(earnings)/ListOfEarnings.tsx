import {View, Text, StyleSheet} from "react-native";
import React, {useState} from "react";
import BlankCard from "@/components/common/BlankCard";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "./_layout";
import {themedTextStyle} from "@/constants/styles/themedTextStyle";
import EarningsItem from "@/app/(main)/(home)/(earnings)/EarningsItem";

type ListOfTransactionsProps = {
  title: string;
  data: any[] | undefined;
  navigation: StackNavigationProp<RootStackParamList, 'Earnings'>;
}

export default function ListOfEarnings({title, navigation, data}: ListOfTransactionsProps) {
  data = [
    {
      id: 0,
      name: 'Зарплата',
      earning: '123',
      date: '7.04.2025',
      time: '12:12 7.04.2025',
    },
  ];

  return (
    <BlankCard flex={1}>
      <Text style={themedTextStyle.text}>{title}</Text>

      <View style={styles.container}>
        {data?.map((transaction) => (
          <EarningsItem
            id={transaction.id}
            name={transaction.name}
            earning={transaction.earning}
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
