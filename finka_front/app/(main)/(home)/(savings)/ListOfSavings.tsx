import {View, Text, StyleSheet} from "react-native";
import React, {useState} from "react";
import BlankCard from "@/components/common/BlankCard";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "./_layout";
import {themedTextStyle} from "@/constants/styles/themedTextStyle";
import SavingsItem from "@/app/(main)/(home)/(savings)/SavingsItem";

type ListOfTransactionsProps = {
  title: string;
  data: any[] | undefined;
  navigation: StackNavigationProp<RootStackParamList, 'Savings'>;
}

export default function ListOfSavings({title, navigation, data}: ListOfTransactionsProps) {
  data = [
    {
      id: 0,
      name: 'Накопление1',
      saving: '123',
      date: '6.04.2025',
      time: '12:23 6.04.2025',
    },
    {
      id: 0,
      name: 'Накопление2',
      saving: '123',
      date: '6.04.2025',
      time: '12:23 6.04.2025',
    },
    {
      id: 0,
      name: 'Накопление3',
      saving: '123',
      date: '6.04.2025',
      time: '12:23 6.04.2025',
    },
  ];

  return (
    <BlankCard flex={1}>
      <Text style={themedTextStyle.text}>{title}</Text>

      <View style={styles.container}>
        {data?.map((transaction) => (
          <SavingsItem
            id={transaction.id}
            name={transaction.name}
            saving={transaction.saving}
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
