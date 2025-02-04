import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import emailHandler from "../../../formHandler/userFields/emailHandler";
import passwordHandler from "../../../formHandler/userFields/passwordHandler";
import {userLoginApi, userRegistrationApi} from "../../../api/userApi";

const LoginScreen = () => {

    const [loginData, setLoginData] = useState({email: '', password: ''});

    const checkInput = (value: string, type: string) => {
        switch (type) {
            case 'email':
                return emailHandler({value, required: true});
            case 'password':
                return passwordHandler({value, required: true});
            default:
                return 'empty';
        }
    }

    const validateRegistrationForm = () => {
        Object.entries(loginData).forEach(([key, value]) => {
            const message: string = checkInput(value, key);
            if (message !== 'success') {
                alert(message);
                return false;
            }
        })

        return true;
    }

    const userRegistrationFunc = async () => {
        if (!validateRegistrationForm()) {
            return false;
        }

        const data = await userLoginApi(loginData.email, loginData.password);
        if (data) {
            alert('Пользователь успешно зарегистрирован!');
        } else {
            alert(`Упс... что-то пошло не так! ${data}`);
        }
    }

    return (
        <>
            <TextInput
                autoFocus={true}
                inputMode={"email"}
                keyboardType={"email-address"}
                style={styles.input}
                value={loginData.email}
                placeholder='Введите вашу почту'
                onChangeText={(inputValue) => setLoginData({...loginData, email: inputValue})}
                autoCapitalize={"none"}

            />
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                value={loginData.password}
                placeholder='Введите ваш пароль'
                onChangeText={(inputValue) => setLoginData({...loginData, password: inputValue})}
                autoCapitalize={"none"}
            />
            <Button title='Войти' onPress={userRegistrationFunc}/>
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
});

export default LoginScreen;