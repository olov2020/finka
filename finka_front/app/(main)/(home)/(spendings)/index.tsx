import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { ThemedView } from '@/components/common/ThemedView';
import TransactionsFromTimeToTime from '@/components/transactions/TransactionsFromTimeToTime';
import { addSpendingsApi, getAllSpendingsApi, getSpendingsFromDatesApi } from '@/api/spendingsApi';
import Button from '@/components/common/Button';
import ListOfSpendings from '@/app/(main)/(home)/(spendings)/ListOfSpendings';
import { safeAreaViewStyle } from '@/constants/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './_layout';
import { ThemedText } from "@/components/common/ThemedText";
import { SpendingsItemProps } from "@/types/SpendingsItemProps.type";
import { useRoute } from '@react-navigation/native';

type SpendingsViewProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Spendings'>;
};

export type Dates = {
  date1: string;
  date2: string;
}

export default function SpendingsView({ navigation }: SpendingsViewProps) {
  const [data, setData] = React.useState<SpendingsItemProps[]>();
  const [sum, setSum] = useState('123');
  const route  = useRoute();

  useEffect(() => {
    const getData = async () => {
      const dataToDisplay = await getAllSpendingsApi();
      setData(dataToDisplay.data);
      setSum(dataToDisplay.sum);
    }

    getData();
  }, [route, data]);

  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView style={safeAreaViewStyle.safeAreaView}>
          <ThemedText fontSize={24}>Ваши траты</ThemedText>
          <TransactionsFromTimeToTime
            title="Траты"
            sum={sum}
            setSum={setSum}
            setData={setData}
            fetchDataWithDates={getSpendingsFromDatesApi}
            fetchData={getAllSpendingsApi}
          />
          <Button
            title="Добавить траты"
            icon={<Text>+</Text>}
            justifyContent="space-between"
            onPress={() => {
              navigation.navigate('add-spendings', {
                title: 'Добавить траты',
                buttons: {
                  left: {
                    title: 'Добавить',
                    fetchData: addSpendingsApi,
                  },
                  right: {
                    title: 'Отмена',
                    onPress: () => navigation.goBack(),
                  },
                },
              });
            }}
          />
          <ListOfSpendings
            title="Список трат"
            data={data}
            navigation={navigation}
          />
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  );
}
