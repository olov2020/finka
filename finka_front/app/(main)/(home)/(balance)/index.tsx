import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { ThemedView } from '@/components/common/ThemedView';
import Button from '@/components/common/Button';
import { safeAreaViewStyle } from '@/constants/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './_layout';
import { ThemedText } from "@/components/common/ThemedText";
import { BalanceItemProps } from "@/types/BalanceItemProps.type";
import { addBalanceApi, getAllBalanceApi } from "@/api/balanceApi";
import ListOfBalance from "@/app/(main)/(home)/(balance)/ListOfBalance";
import { useRoute } from '@react-navigation/native';

type BalanceViewProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Balance'>;
};

export type Dates = {
  date1: string;
  date2: string;
}

export default function BalanceView({ navigation }: BalanceViewProps) {
  const [data, setData] = useState<BalanceItemProps[]>();
  const route = useRoute();

  useEffect(() => {
    const getData = async () => {
      const dataToDisplay = await getAllBalanceApi();
      setData(dataToDisplay);
    }

    getData();
  }, [route]);

  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView style={safeAreaViewStyle.safeAreaView}>
          <ThemedText fontSize={24}>Ваши остатки</ThemedText>
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
                    fetchData: addBalanceApi,
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
