import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddTransactionProps} from '@/types/AddTransactionProps.type';
import EarningsView from "./index";
import AddEarningsView from "./add-earnings";

export type RootStackParamList = {
  'Earnings': undefined;
  'add-earnings': AddTransactionProps;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Earnings">
      <Stack.Screen name="Earnings" component={EarningsView} options={{ headerShown: false }}/>
      <Stack.Screen name="add-earnings" component={AddEarningsView} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default App;
