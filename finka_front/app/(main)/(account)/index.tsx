import { ThemedView } from "@/components/others/ThemedView";
import {SafeAreaView, StyleSheet, View, Text, TextInput} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {ThemedText} from "@/components/others/ThemedText";
import {usePathname} from "expo-router";
import {useEffect, useState} from "react";
import {getAccountDataApi} from "@/api/userApi";

interface AccountData {
    username: string;
    email: string;
    name?: string;
    surname?: string;
    age?: number;
    sex?: boolean;
}

export default function AccountView() {

    const [userData, setUserData] = useState<AccountData | null>({
        username: 'vova',
        email: 'vova@gmail.com',
        name: 'vova',
        surname: 'vova',
        age: 20,
        sex: true,
    });
    const pathname = usePathname();

    /*useEffect( () => {
        const getAccountDataFunc = async() => {
            const data: AccountData = await getAccountDataApi();
            setUserData(data);
        }

        getAccountDataFunc();
    }, [pathname]);*/

    if (!userData) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <ThemedView style={styles.container}>
                <SafeAreaView style={styles.innerContainer}>
                    <ThemedText type="title">Личный аккаунт</ThemedText>

                    <View>
                        <Text>Никнейм</Text>
                        <TextInput
                            value={userData.username}
                        />

                        <Text>Имя</Text>
                        <TextInput
                            value={userData.email}
                        />

                        <Text>Фамилия</Text>
                        <TextInput
                            value={userData.email}
                        />

                        <Text>Возраст</Text>
                        <TextInput
                            value={userData.age?.toString()}
                        />

                        <Text>Пол</Text>
                        <TextInput
                            value={userData.sex ? 'Мужской' : 'Женский'}
                        />

                        <Text>Email</Text>
                        <TextInput
                            value={userData.email}
                        />
                    </View>
                </SafeAreaView>
            </ThemedView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    link: {
        lineHeight: 30,
        fontSize: 16,
    },
});