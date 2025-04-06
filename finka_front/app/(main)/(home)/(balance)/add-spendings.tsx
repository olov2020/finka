import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {ThemedView} from '@/components/common/ThemedView';
import {safeAreaViewStyle} from '@/constants/styles';
import {RouteProp} from '@react-navigation/native';
import AddTransaction from '@/components/transactions/AddTransaction';
import {RootStackParamList} from './_layout';

type AddSpendingsViewProps = {
  route: RouteProp<RootStackParamList, 'add-spendings'>;
};

export default function AddSpendingsView({route}: AddSpendingsViewProps) {
  const {title, data, buttons} = route.params;

  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView style={safeAreaViewStyle.safeAreaView}>
          <AddTransaction data={data} title={title} buttons={buttons}/>
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  );
}
