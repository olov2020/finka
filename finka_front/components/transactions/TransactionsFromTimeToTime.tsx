import {View, Text, StyleSheet} from "react-native";
import BlankCard from "@/components/common/BlankCard";
import {TextInputMask} from 'react-native-masked-text';
import {Dates} from "@/app/(main)/(home)/(spendings)";

interface TransactionsFromTimeToTimeProps {
  dates: Dates;
  title: string;
  setDates: (dates: Dates) => void;
  sum: string;
}

export default function TransactionsFromTimeToTime({
                                                     title,
                                                     dates,
                                                     setDates,
                                                     sum,
                                                   }: TransactionsFromTimeToTimeProps) {
  return (
    <BlankCard>
      <View style={styles.header}>
        <Text>{title}</Text>
        <Text>{sum} ₽</Text>
      </View>
      <View style={styles.container}>
        <Text>С</Text>
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'DD.MM.YYYY',
          }}
          style={styles.input}
          value={dates.date1}
          onChangeText={(value) => setDates({...dates, date1: value})}
        />
        <Text>По</Text>
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'DD.MM.YYYY',
          }}
          style={styles.input}
          value={dates.date2}
          onChangeText={(value) => setDates({...dates, date2: value})}
        />
      </View>
    </BlankCard>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(221, 223, 224, 0.3)',
    borderRadius: 2,
    padding: 4,
    width: '40%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: '20%',
    justifyContent: 'space-between',
  },
});
