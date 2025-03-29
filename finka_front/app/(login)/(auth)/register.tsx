import {ThemedView} from "@/components/common/ThemedView";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";
import {emailHandler} from "@/functioins/formHandler/emailHandler";
import {passwordHandler} from "@/functioins/formHandler/passwordHandler";
import {loginApi, registrationApi} from "@/api/userApi";
import {Button} from "@rneui/themed";

interface UserData {
    email: string;
    username: string;
    password: string;
    samePassword: string;
}

export default function RegisterView() {

    const [userData, setUserData] = useState<UserData>({email: '', password: '', username: '', samePassword: ''});
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [samePasswordError, setSamePasswordError] = useState<string | null>(null);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    const checkSamePassword = (value: string): string => {
        if (userData.password === value) {
            return 'success';
        }
        return 'Пароли не совпадают';
    }

    const checkDataErrors = (type: string, value: string) => {
        switch (type) {
            case 'email':
                return emailHandler(value);
            case 'password':
                return passwordHandler(value);
            case 'samePassword':
                return checkSamePassword(value);
            case 'username':
                return value.trim() !== '';
            default:
                throw new Error(`There is no validation for this type of field ${type}`);
        }
    }

    const registerFunc = async () => {
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
            const data = await registrationApi(userData.email, userData.password, userData.username);
            alert('Регистрация прошла успешно!');
        } catch (error) {
            alert(error);
        }
    }

    return (
        <SafeAreaProvider>
            <ThemedView style={styles.container}>
                <SafeAreaView style={styles.innerContainer}>
                    <Text>Зарегистрироваться</Text>

                    <View>
                        <Text>Введите свой ник</Text>
                        <TextInput
                            autoFocus={true}
                            placeholder="username"
                            value={userData.username}
                            onChangeText={(text: string) => setUserData({...userData, username: text})}
                        />

                        <Text>Введите свою почту</Text>
                        <TextInput
                            inputMode='email'
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

                        <Text>Подтвердите пароль</Text>
                        <TextInput placeholder="********"
                                   secureTextEntry={!isPasswordVisible}
                                   value={userData.samePassword}
                                   onChangeText={(text: string) => setUserData({...userData, samePassword: text})}
                        />
                        <Text>{userData.samePassword}</Text>
                        <Button title={isPasswordVisible ? "Скрыть пароль" : "Показать пароль"}
                                onPress={togglePasswordVisibility}/>
                    </View>

                    <Button
                        onPress={registerFunc}
                    >
                        Зарегистрироваться
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
});