import React, {useEffect, useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {ThemedView} from '@/components/common/ThemedView';
import Button from '@/components/common/Button';
import ListOfSpendings from '@/app/(main)/(home)/(spendings)/ListOfSpendings';
import {safeAreaViewStyle} from '@/constants/styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './_layout';
import {ThemedText} from "@/components/common/ThemedText";
import {format} from "date-fns";
import {BalanceItemProps} from "@/types/BalanceItemProps.type";
import {addBalanceApi} from "@/api/balanceApi";
import ListOfBalance from "@/app/(main)/(home)/(balance)/ListOfBalance";

type SpendingsViewProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Balance'>;
};

export type Dates = {
  date1: string;
  date2: string;
}

export default function SpendingsView({navigation}: SpendingsViewProps) {
  const [data, setData] = React.useState<BalanceItemProps[]>();
  const currentDate = new Date();
  const firstDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const [dates, setDates] = React.useState<Dates>({
    date1: format(firstDateOfMonth, 'dd.MM.yyyy'),
    date2: format(currentDate, 'dd.MM.yyyy'),
  });
  const pattern = /^\d{2}\.\d{2}\.\d{4}$/;
  const [sum, setSum] = useState('123');

  /*useEffect( () => {
    const getData = async () => {
      let dataToDisplay = undefined;
      if (pattern.test(dates.date1) && pattern.test(dates.date2)) {
        dataToDisplay = await getSpendingsFromDatesApi({
          date1: dates.date1,
          date2: dates.date2,
        });
      } else {
        dataToDisplay = await getAllSpendingsApi();
      }
      setData(dataToDisplay.data);
      setSum(dataToDisplay.sum);
    }

    getData();
  }, [dates]);*/

  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView style={safeAreaViewStyle.safeAreaView}>
          <ThemedText>Ваши остатки</ThemedText>

          <Button
            title="Добавить остаток"
            icon={<Text>+</Text>}
            justifyContent="space-between"
            onPress={() => {
              navigation.navigate('add-balance', {
                title: 'Добавить остаток',
                buttons: {
                  left: {
                    title: 'Добавить',
                    onPress: () => addBalanceApi,
                  },
                  right: {
                    title: 'Отмена',
                    onPress: () => navigation.goBack(),
                  },
                },
              });
            }}
          />

          <ListOfBalance
            title="Список остатков"
            data={data}
            navigation={navigation}
          />
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  );
}
