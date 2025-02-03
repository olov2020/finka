import {Button, TextInput, View, StyleSheet} from "react-native";
import {useState} from "react";
import {userRegistrationApi} from "../../../api/userApi";
import emailHandler from '../../../formHandler/userFields/emailHandler';
import passwordHandler from '../../../formHandler/userFields/passwordHandler';

const RegistrationScreen = () => {

    const [registrationData, setRegistrationData] = useState({email: '', password: ''});

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
        Object.entries(registrationData).forEach(([key, value]) => {
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

        const data = await userRegistrationApi(registrationData.email, registrationData.password);
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
                value={registrationData.email}
                placeholder='Введите вашу почту'
                onChangeText={(inputValue) => setRegistrationData({...registrationData, email: inputValue})}
                autoCapitalize={"none"}

            />
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                value={registrationData.password}
                placeholder='Введите ваш пароль'
                onChangeText={(inputValue) => setRegistrationData({...registrationData, password: inputValue})}
                autoCapitalize={"none"}
            />
            <Button title='Зарегистрироваться' onPress={userRegistrationFunc}/>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
});

export default RegistrationScreen;