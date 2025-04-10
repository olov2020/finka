import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "./_layout";
import {EarningsItemProps} from "@/types/EarningsItemProps.type";
import {changeEarningsByIdApi} from "@/api/earningsApi";

type TransactionItemWithNavigationProps = EarningsItemProps & {
  navigation: StackNavigationProp<RootStackParamList, 'Earnings'>;
}

export default function EarningsItem({
                                        id,
                                        name,
                                        earning,
                                        date,
                                        time,
                                        navigation
                                      }: TransactionItemWithNavigationProps) {
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('add-earnings', {
        title: 'Изменить траты',
        data: {
          id,
          name,
          earning,
          date,
          time,
        },
        buttons: {
          left: {
            title: 'Сохранить',
            onPress: changeEarningsByIdApi,
          },
          right: {
            title: 'Удалить',
            onPress: () => navigation.goBack(),
          },
        },
      });
    }}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.mainText}>{name} - {earning}р</Text>
        </View>
        <Text>{date}</Text>
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
