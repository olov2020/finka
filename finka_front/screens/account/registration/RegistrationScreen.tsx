import {Button, TextInput, View, StyleSheet} from "react-native";
import {useState} from "react";
import {userRegistrationApi} from "../../../api/userApi";

const RegistrationScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userRegistrationFunc = async () => {
        const data = await userRegistrationApi(email, password);
        if (data) {
            alert('Пользователь успешно зарегистрирован!');
        } else {
            alert(`Упс... что-то пошло не так! ${data}`);
        }
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                value={email}
                placeholder='Введите вашу почту'
                onChangeText={(text) => setEmail(text)}
                autoCapitalize={"none"}
            />
            <TextInput
                style={styles.input}
                value={password}
                placeholder='Введите ваш пароль'
                onChangeText={(text) => setPassword(text)}
                autoCapitalize={"none"}
            />
            <Button title='Зарегистрироваться' onPress={userRegistrationFunc}/>
        </View>
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