import {Text, View, Button} from "react-native";
import React from "react";

const AccountScreen = ({navigation}: { navigation: any }) => {
    return (
        <View>
            <Text>Страница аккаунта</Text>
            <Button
                title="Войти в аккаунт"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Зарегистрироваться"
                onPress={() => navigation.navigate('Registration')}
            />
        </View>
    );
}

export default AccountScreen;