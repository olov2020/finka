import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SpendingsView from './index';
import AddSpendingsView from './add-spendings';
import {AddTransactionProps} from '@/types/AddTransactionProps.type';

export type RootStackParamList = {
  'Spendings': undefined;
  'add-spendings': AddTransactionProps;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Spendings">
      <Stack.Screen name="Spendings" component={SpendingsView} options={{ headerShown: false }}/>
      <Stack.Screen name="add-spendings" component={AddSpendingsView} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default App;
