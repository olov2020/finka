import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "./_layout";
import {SavingsItemProps} from "@/types/SavingsItemProps.type";
import {changeSavingsByIdApi} from "@/api/savingsApi";
import {ReminderItemProps} from "@/types/ReminderItemProps.type";
import {changeReminderByIdApi} from "@/api/reminderApi";

type TransactionItemWithNavigationProps = ReminderItemProps & {
  navigation: StackNavigationProp<RootStackParamList, 'Reminder'>;
}

export default function ReminderItem({
                                       id,
                                       name,
                                       price,
                                       date,
                                       link,
                                       time,
                                       navigation
                                     }: TransactionItemWithNavigationProps) {
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('add-reminder', {
        title: 'Изменить напоминание',
        data: {
          id,
          name,
          price,
          link,
          date,
          time,
        },
        buttons: {
          left: {
            title: 'Сохранить',
            onPress: changeReminderByIdApi,
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
          <Text>{link}</Text>
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
