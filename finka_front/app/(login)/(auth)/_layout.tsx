import { Tabs } from "expo-router";
import React from "react";

import { ColorsConst } from "@/constants/colors.const";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function AuthLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: ColorsConst[colorScheme ?? "light"].tint,
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Login",
                }}
            />
            <Tabs.Screen
                name="register"
                options={{
                    title: "Register",
                }}
            />
        </Tabs>
    );
}