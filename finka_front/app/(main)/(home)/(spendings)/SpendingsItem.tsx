import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {SpendingsItemProps} from "@/types/SpendingsItemProps.type";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "./_layout";
import {changeSpendingsByIdApi} from "@/api/spendingsApi";

type TransactionItemWithNavigationProps = SpendingsItemProps & {
  navigation: StackNavigationProp<RootStackParamList, 'Spendings'>;
}

export default function SpendingsItem({
                                        id,
                                        name,
                                        category,
                                        price,
                                        date,
                                        time,
                                        navigation
                                      }: TransactionItemWithNavigationProps) {
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('add-spendings', {
        title: 'Изменить траты',
        data: {
          id,
          name,
          category,
          price,
          date,
          time,
        },
        buttons: {
          left: {
            title: 'Сохранить',
            onPress: changeSpendingsByIdApi,
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
          <Text style={styles.mainText}>{name} - {price}р</Text>
          <Text style={styles.category}>{category}</Text>
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
