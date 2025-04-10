import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddTransactionProps} from '@/types/AddTransactionProps.type';
import ReminderView from "./index";
import AddReminderView from "./add-reminder";

export type RootStackParamList = {
  'Reminder': undefined;
  'add-reminder': AddTransactionProps;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Reminder">
      <Stack.Screen name="Reminder" component={ReminderView} options={{ headerShown: false }}/>
      <Stack.Screen name="add-reminder" component={AddReminderView} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default App;
