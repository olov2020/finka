import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./_layout";
import { BalanceItemProps } from "@/types/BalanceItemProps.type";
import { changeBalanceByIdApi, deleteBalanceByIdApi } from "@/api/balanceApi";

type TransactionItemWithNavigationProps = BalanceItemProps & {
  navigation: StackNavigationProp<RootStackParamList, 'Balance'>;
}

export default function BalanceItem({
  id,
  name,
  balance,
  start_date,
  end_date,
  time,
  navigation
}: TransactionItemWithNavigationProps) {
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('add-balance', {
        title: 'Изменить баланс',
        data: {
          id,
          name,
          balance,
          start_date,
          end_date,
          time,
        },
        buttons: {
          left: {
            title: 'Сохранить',
            fetchData: changeBalanceByIdApi,
          },
          right: {
            title: 'Удалить',
            fetchData: deleteBalanceByIdApi,
          },
        },
      });
    }}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.mainText}>{name} - {balance}р</Text>
        </View>
        <Text>{start_date} - {end_date}</Text>
      </View>
    </TouchableOpacity>
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
