import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet, Alert} from 'react-native';
import {userRegistrationApi} from '../../../api/userApi';
import emailHandler from '../../../formHandler/userFields/emailHandler';
import passwordHandler from '../../../formHandler/userFields/passwordHandler';

const RegistrationScreen = () => {
    const [registrationData, setRegistrationData] = useState({email: '', password: ''});

    const checkInput = (value: string, type: string): string => {
        switch (type) {
            case 'email':
                return emailHandler({value, required: true});
            case 'password':
                return passwordHandler({value, required: true});
            default:
                return 'empty';
        }
    };

    const validateRegistrationForm = (): boolean => {
        for (const [key, value] of Object.entries(registrationData)) {
            const message: string = checkInput(value, key);
            if (message !== 'success') {
                alert(message);
                return false;
            }
        }
        return true;
    };

    const userRegistrationFunc = async () => {
        if (!validateRegistrationForm()) {
            return;
        }

        try {
            const data = await userRegistrationApi(registrationData.email, registrationData.password);
            if (data) {
                alert('Пользователь успешно зарегистрирован!');
            } else {
                alert('Упс... что-то пошло не так!');
            }
        } catch (error) {
            alert(error)
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                autoFocus={true}
                inputMode="email"
                keyboardType="email-address"
                style={styles.input}
                value={registrationData.email}
                placeholder="Введите вашу почту"
                onChangeText={(inputValue) => setRegistrationData({...registrationData, email: inputValue})}
                autoCapitalize="none"
            />
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                value={registrationData.password}
                placeholder="Введите ваш пароль"
                onChangeText={(inputValue) => setRegistrationData({...registrationData, password: inputValue})}
                autoCapitalize="none"
            />
            <Button title="Зарегистрироваться" onPress={userRegistrationFunc}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        marginBottom: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
    },
});

export default RegistrationScreen;
