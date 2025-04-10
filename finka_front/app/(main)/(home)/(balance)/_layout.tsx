import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddTransactionProps} from '@/types/AddTransactionProps.type';
import AddBalanceView from "./add-balance";
import BalanceView from "./index";

export type RootStackParamList = {
  'Balance': undefined;
  'add-balance': AddTransactionProps;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Balance">
      <Stack.Screen name="Balance" component={BalanceView} options={{ headerShown: false }}/>
      <Stack.Screen name="add-balance" component={AddBalanceView} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default App;
