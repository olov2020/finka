import { View, Text, StyleSheet } from "react-native";
import BlankCard from "@/components/common/BlankCard";
import { TextInputMask } from 'react-native-masked-text';
import { Dates } from "@/app/(main)/(home)/(spendings)";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { getAllSpendingsApi } from "@/api/spendingsApi";
import Button from "../common/Button";

interface TransactionsFromTimeToTimeProps {
  title: string;
  sum: string;
  setSum: any;
  setData: any;
  fetchData: any;
  fetchDataWithDates?: any;
}

export default function TransactionsFromTimeToTime({
  title,
  sum,
  setSum,
  setData,
  fetchData,
  fetchDataWithDates,
}: TransactionsFromTimeToTimeProps) {
  const currentDate = new Date();
  const firstDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const [dates, setDates] = useState<Dates>({
    date1: format(firstDateOfMonth, 'dd.MM.yyyy'),
    date2: format(currentDate, 'dd.MM.yyyy'),
  });

  const handlePress = async () => {
    const data = dates.date1 && dates.date2 ? await fetchDataWithDates({
      date1: dates.date1,
      date2: dates.date2,
    }) :
      await fetchData();
    if (!data) {
      alert("Попробуйте еще раз позже, что-то пошло не так...");
    } else {
      setData(data);
    }
  };

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
          onChangeText={(value) => setDates({ ...dates, date1: value })}
        />
        <Text>По</Text>
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'DD.MM.YYYY',
          }}
          style={styles.input}
          value={dates.date2}
          onChangeText={(value) => setDates({ ...dates, date2: value })}
        />
      </View>
      <Button title="Получить информацию" onPress={handlePress} />
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
