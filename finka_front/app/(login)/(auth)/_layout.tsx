import React from "react";

import LoginView from "@/app/(login)/(auth)/index";
import RegisterView from "@/app/(login)/(auth)/register";
import {createStackNavigator} from "@react-navigation/stack";

export type RootStackParamList = {
  'Login': undefined;
  'Register': undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AuthLayout() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginView} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={RegisterView} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}