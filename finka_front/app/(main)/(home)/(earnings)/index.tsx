import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { ThemedView } from '@/components/common/ThemedView';
import TransactionsFromTimeToTime from '@/components/transactions/TransactionsFromTimeToTime';
import Button from '@/components/common/Button';
import { safeAreaViewStyle } from '@/constants/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './_layout';
import { ThemedText } from "@/components/common/ThemedText";
import { EarningsItemProps } from "@/types/EarningsItemProps.type";
import ListOfEarnings from "@/app/(main)/(home)/(earnings)/ListOfEarnings";
import { addEarningsApi, getAllEarningsApi, getEarningsFromDatesApi } from '@/api/earningsApi';
import { useRoute } from '@react-navigation/native';

type EarningsViewProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Earnings'>;
};

export type Dates = {
  date1: string;
  date2: string;
}

export default function EarningsView({ navigation }: EarningsViewProps) {
  const [data, setData] = useState<EarningsItemProps[]>();
  const [sum, setSum] = useState('');
  const route = useRoute();

  useEffect(() => {
    const getData = async () => {
      const dataToDisplay = await getAllEarningsApi();
      setData(dataToDisplay.data);
      setSum(dataToDisplay.sum);
    }

    getData();
  }, [route]);

  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView style={safeAreaViewStyle.safeAreaView}>
          <ThemedText fontSize={24}>Ваш заработок</ThemedText>
          <TransactionsFromTimeToTime
            title="Заработок"
            sum={sum}
            setSum={setSum}
            setData={setData}
            fetchDataWithDates={getEarningsFromDatesApi}
            fetchData={getAllEarningsApi}
          />
          <Button
            title="Добавить заработок"
            icon={<Text>+</Text>}
            justifyContent="space-between"
            onPress={() => {
              navigation.navigate('add-earnings', {
                title: 'Добавить траты',
                buttons: {
                  left: {
                    title: 'Добавить',
                    fetchData: addEarningsApi,
                  },
                  right: {
                    title: 'Отмена',
                    onPress: () => navigation.goBack(),
                  },
                },
              });
            }}
          />
          <ListOfEarnings
            title="Список заработков"
            data={data}
            navigation={navigation}
          />
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  );
}
