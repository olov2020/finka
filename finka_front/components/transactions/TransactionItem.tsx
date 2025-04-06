import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {TransactionItemProps} from "@/types/TransactionItem.type";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/app/(main)/(home)/(spendings)/_layout";

type TransactionItemWithNavigationProps = TransactionItemProps & {
  navigation: StackNavigationProp<RootStackParamList, 'Spendings'>;
}

export default function TransactionItem({
                                          name,
                                          amount,
                                          amount_measure,
                                          categories,
                                          price,
                                          date,
                                          time,
                                          navigation
                                        }: TransactionItemWithNavigationProps) {
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('add-spendings', {
        title: 'Добавить траты',
        data: [
          {
            name: 'Название',
            value: name,
            editable: true,
          },
          {
            name: 'asd',
            value: 1231,
          }
        ],
        buttons: {
          left: {
            title: 'Сохранить',
            onPress: () => navigation.goBack(),
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
          <View>
            <Text style={styles.mainText}>{name} {amount} {amount_measure} - {price}р</Text>
          </View>
          {categories?.map((category) => (
            <Text style={styles.category}>{category}</Text>
          ))}
        </View>
        <Text>{time} - {date}</Text>
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
