import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { ThemedView } from '@/components/common/ThemedView';
import Button from '@/components/common/Button';
import { safeAreaViewStyle } from '@/constants/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './_layout';
import { ThemedText } from "@/components/common/ThemedText";
import { SavingsItemProps } from "@/types/SavingsItemProps.type";
import { addSavingsApi, getAllSavingsApi } from "@/api/savingsApi";
import ListOfSavings from "@/app/(main)/(home)/(savings)/ListOfSavings";
import { useRoute } from '@react-navigation/native';

type SpendingsViewProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Savings'>;
};

export default function SavingsView({ navigation }: SpendingsViewProps) {
  const [data, setData] = React.useState<SavingsItemProps[]>();
  const route = useRoute();

  useEffect(() => {
    const getData = async () => {
      const dataToDisplay = await getAllSavingsApi();
      setData(dataToDisplay);
    }

    getData();
  }, [route]);

  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView style={safeAreaViewStyle.safeAreaView}>
          <ThemedText fontSize={24}>Ваши накопления</ThemedText>
          <Button
            title="Добавить цель накопления"
            icon={<Text>+</Text>}
            justifyContent="space-between"
            onPress={() => {
              navigation.navigate('add-savings', {
                title: 'Добавить цель накопления',
                buttons: {
                  left: {
                    title: 'Добавить',
                    fetchData: addSavingsApi,
                  },
                  right: {
                    title: 'Отмена',
                    onPress: () => navigation.goBack(),
                  },
                },
              });
            }}
          />
          <ListOfSavings
            title="Список накоплений"
            data={data}
            navigation={navigation}
          />
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  );
}

