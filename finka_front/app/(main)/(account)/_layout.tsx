import { Stack } from "expo-router";
import "react-native-reanimated";

export default function AccountLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Account", headerShown: false }}
      />
    </Stack>
  );
}