import {Stack} from "expo-router";
import React from "react";
import {StyleSheet} from "react-native";

export default function MainLayout() {

    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Spendings",
                    headerShown: false,
                }}
            />
        </Stack>
    );
}

const styles = StyleSheet.create({
    headerButton: {
        paddingHorizontal: 16,
    },
});