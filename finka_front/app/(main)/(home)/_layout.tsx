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
        </Stack>
    );
}