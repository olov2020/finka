import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import AccountScreen from '../screens/account/AccountScreen';
import RegistrationScreen from '../screens/account/registration/RegistrationScreen';
import LoginScreen from '../screens/account/login/LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AccountStack = () => {
    return (
        <Stack.Navigator initialRouteName="Account">
            <Stack.Screen name="Account" component={AccountScreen} options={{ title: 'Account' }} />
            <Stack.Screen name="Registration" component={RegistrationScreen} options={{ title: 'Registration' }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        </Stack.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
            <Tab.Screen name="Account" component={AccountStack} options={{ title: 'Account' }} />
        </Tab.Navigator>
    );
};

export default AppNavigator;
