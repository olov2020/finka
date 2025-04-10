import {Stack} from "expo-router";
import "react-native-reanimated";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{headerTitle: "Home", headerShown: false}}
      />
      <Stack.Screen
        name="(spendings)"
        options={{headerTitle: "Spendings", headerShown: false}}
      />
      <Stack.Screen
        name="(earnings)"
        options={{headerTitle: "Earnings", headerShown: false}}
      />
      <Stack.Screen
        name="(balance)"
        options={{headerTitle: "Balance", headerShown: false}}
      />
      <Stack.Screen
        name="(savings)"
        options={{headerTitle: "Savings", headerShown: false}}
      />
      <Stack.Screen
        name="(reminder)"
        options={{headerTitle: "Reminder", headerShown: false}}
      />
    </Stack>
  );
}