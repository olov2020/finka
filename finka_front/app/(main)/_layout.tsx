import {Stack} from "expo-router";
import React from "react";

export default function MainLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="(account)"
                options={{
                    title: "Account",
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(home)"
                options={{
                    title: "Home",
                    headerShown: false,
                }}
            />
        </Stack>
    );
}
