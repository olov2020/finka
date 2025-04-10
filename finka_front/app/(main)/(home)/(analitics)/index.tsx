import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {ThemedView} from '@/components/common/ThemedView';
import TransactionsFromTimeToTime from '@/components/transactions/TransactionsFromTimeToTime';
import {getAllSpendingsApi, getSpendingsFromTime1ToTime2Api} from '@/api/spendingsApi';
import Button from '@/components/common/Button';
import ListOfSpendings from '@/app/(main)/(home)/(spendings)/ListOfSpendings';
import {safeAreaViewStyle} from '@/constants/styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './_layout';
import {ThemedText} from "@/components/common/ThemedText";

type SpendingsViewProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Spendings'>;
};

export default function SpendingsView({navigation}: SpendingsViewProps) {
  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView style={safeAreaViewStyle.safeAreaView}>
            <ThemedText>Spendings view</ThemedText>

            <TransactionsFromTimeToTime
              title="Траты"
              transactionApi={getSpendingsFromTime1ToTime2Api}
            />

            <Button
              title="Добавить траты"
              icon={<Text>+</Text>}
              justifyContent="space-between"
              onPress={() => {
                navigation.navigate('add-spendings', {
                  title: 'Добавить траты',
                  data: [
                    {
                      name: 'Название',
                      value: 'burger',
                      editable: true,
                    },
                    {
                      name: 'asd',
                      value: 1231,
                    },
                    {
                      name: 'Название',
                      value: 'burger',
                      editable: true,
                    },
                    {
                      name: 'asd',
                      value: 1231,
                    }
                  ],
                  buttons: {
                    left: {
                      title: 'Добавить',
                      onPress: () => navigation.goBack(),
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
              transactionApi={getAllSpendingsApi}
              navigation={navigation}
            />
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  );
}
