import {ThemedText} from "@/components/others/ThemedText";
import {ThemedView} from "@/components/others/ThemedView";
import {StyleSheet, TextInput, View, Text} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Button} from "@rneui/themed";
import {Link, router} from "expo-router";
import {useState} from "react";
import {loginApi} from "@/api/userApi";
import {emailHandler} from '@/functioins/formHandler/emailHandler';
import {passwordHandler} from '@/functioins/formHandler/passwordHandler';

interface UserData {
    email: string;
    password: string;
}

export default function LoginView() {

    const [userData, setUserData] = useState<UserData>({email: '', password: ''});
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };


    const checkDataErrors = (type: string, value: string) => {
        switch (type) {
            case 'email':
                return emailHandler(value);
            case 'password':
                return passwordHandler(value);
            default:
                throw new Error(`There is no validation for this type of field ${type}`);
        }
    }

    const loginFunc = () => {
        router.replace("/(main)/(home)");
    }

    /*const loginFunc = async () => {
        for (const [key, value] of Object.entries(userData)) {
            try {
                const error = checkDataErrors(key, value);
                if (error !== 'success') {
                    alert(error);
                    return;
                }
            } catch (error) {
                alert(error);
            }
        }

        try {
            const data = await loginApi(userData.email, userData.password);
            alert('Вход успешно выполнен');
        } catch (error) {
            alert(error);
        }
    }*/

    return (
        <SafeAreaProvider>
            <ThemedView style={styles.container}>
                <SafeAreaView style={styles.innerContainer}>
                    <ThemedText type="title">Войти</ThemedText>

                    <View>
                        <Text>Введите свою почту</Text>
                        <TextInput
                            inputMode='email'
                            autoFocus={true}
                            textContentType='emailAddress'
                            placeholder="example@gmail.com"
                            value={userData.email}
                            onChangeText={(text: string) => setUserData({...userData, email: text})}
                        />

                        <Text>Введите свой пароль</Text>
                        <TextInput placeholder="********"
                                   secureTextEntry={!isPasswordVisible}
                                   value={userData.password}
                                   onChangeText={(text: string) => setUserData({...userData, password: text})}
                        />
                    </View>

                    <Link style={styles.link} href="../forgot-password">
                        Forgot password
                    </Link>

                    <Button
                        onPress={loginFunc}
                    >
                        Войти
                    </Button>
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