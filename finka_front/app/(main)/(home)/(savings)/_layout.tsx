import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddTransactionProps} from '@/types/AddTransactionProps.type';
import SavingsView from "./index";
import AddSavingsView from "./add-savings";

export type RootStackParamList = {
  'Savings': undefined;
  'add-savings': AddTransactionProps;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Savings">
      <Stack.Screen name="Savings" component={SavingsView} options={{ headerShown: false }}/>
      <Stack.Screen name="add-savings" component={AddSavingsView} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default App;
