import { router, Tabs, usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Pressable, Platform, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function MainLayout() {
    const colorScheme = useColorScheme();
    const pathname = usePathname();
    const isHome = pathname === "/";
    const isAccount = pathname === "/account";

    if (Platform.OS === "android") {
        return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer>
                    <Drawer.Screen
                        name="(account)"
                        options={{
                            drawerLabel: "Account",
                            title: "Account",
                            headerShown: isAccount,
                        }}
                    />
                    <Drawer.Screen
                        name="(home)"
                        options={{
                            drawerLabel: "Home",
                            title: "Home",
                            headerShown: isHome,
                        }}
                    />
                    <Drawer.Screen
                        name="settings"
                        options={{
                            drawerLabel: "Settings",
                            title: "Settings",
                        }}
                    />
                </Drawer>
            </GestureHandlerRootView>
        );
    }

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
            }}
        >
            <Tabs.Screen
                name="(account)"
                options={{
                    title: "Account",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="(home)"
                options={{
                    title: "Home",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    headerButton: {
        paddingHorizontal: 16,
    },
});