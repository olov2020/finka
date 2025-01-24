import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/home/HomeScreen";
import AccountScreen from "../screens/account/AccountScreen";
import RegistrationScreen from "../screens/account/registration/RegistrationScreen";
import LoginScreen from "../screens/account/login/LoginScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="HomeScreen" component={HomeScreen} />
                <Tab.Screen name="AccountScreen" component={AccountStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
