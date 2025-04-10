import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "./_layout";
import {SavingsItemProps} from "@/types/SavingsItemProps.type";
import {changeSavingsByIdApi} from "@/api/savingsApi";

type TransactionItemWithNavigationProps = SavingsItemProps & {
  navigation: StackNavigationProp<RootStackParamList, 'Savings'>;
}

export default function SavingsItem({
                                      id,
                                      name,
                                      saving,
                                      date,
                                      time,
                                      navigation
                                    }: TransactionItemWithNavigationProps) {
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('add-savings', {
        title: 'Изменить цель накопления',
        data: {
          id,
          name,
          saving,
          date,
          time,
        },
        buttons: {
          left: {
            title: 'Сохранить',
            onPress: changeSavingsByIdApi,
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
          <Text style={styles.mainText}>{name} - {saving}р</Text>
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
