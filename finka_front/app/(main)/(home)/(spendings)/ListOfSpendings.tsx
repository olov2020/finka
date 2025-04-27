import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import BlankCard from "@/components/common/BlankCard";
import SpendingsItem from "@/app/(main)/(home)/(spendings)/SpendingsItem";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./_layout";
import { themedTextStyle } from "@/constants/styles/themedTextStyle";

type ListOfTransactionsProps = {
  title: string;
  data: any[] | undefined;
  navigation: StackNavigationProp<RootStackParamList, 'Spendings'>;
}

export default function ListOfSpendings({ title, navigation, data }: ListOfTransactionsProps) {
  return (
    <BlankCard flex={1}>
      <Text style={themedTextStyle.text}>{title}</Text>
      <View style={styles.container}>
        {data?.map((transaction) => (
          <SpendingsItem
            id={transaction.id}
            name={transaction.name}
            price={transaction.price}
            category={transaction.category}
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
