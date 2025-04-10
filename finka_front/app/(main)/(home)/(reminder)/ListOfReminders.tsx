import {View, Text, StyleSheet} from "react-native";
import React, {useState} from "react";
import BlankCard from "@/components/common/BlankCard";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "./_layout";
import {themedTextStyle} from "@/constants/styles/themedTextStyle";
import SavingsItem from "@/app/(main)/(home)/(savings)/SavingsItem";
import ReminderItem from "@/app/(main)/(home)/(reminder)/ReminderItem";

type ListOfTransactionsProps = {
  title: string;
  data: any[] | undefined;
  navigation: StackNavigationProp<RootStackParamList, 'Reminder'>;
}

export default function ListOfReminders({title, navigation, data}: ListOfTransactionsProps) {
  data = [
    {
      id: 0,
      name: 'Напоминание1',
      price: '123',
      link: 'some link',
      date: '6.04.2025',
      time: '12:23 6.04.2025',
    },
    {
      id: 0,
      name: 'Напоминание2',
      price: '123',
      link: 'some link',
      date: '6.04.2025',
      time: '12:23 6.04.2025',
    },
    {
      id: 0,
      name: 'Напоминание3',
      price: '123',
      link: 'some link',
      date: '6.04.2025',
      time: '12:23 6.04.2025',
    },
  ];

  return (
    <BlankCard flex={1}>
      <Text style={themedTextStyle.text}>{title}</Text>

      <View style={styles.container}>
        {data?.map((transaction) => (
          <ReminderItem
            id={transaction.id}
            name={transaction.name}
            price={transaction.price}
            link={transaction.link}
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
