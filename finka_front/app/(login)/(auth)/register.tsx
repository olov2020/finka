import {ThemedView} from "@/components/common/ThemedView";
import {Text, TextInput, TouchableOpacity} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";
import {emailHandler} from "@/functioins/formHandler/emailHandler";
import {passwordHandler} from "@/functioins/formHandler/passwordHandler";
import {registrationApi} from "@/api/userApi";
import BlankCard from "@/components/common/BlankCard";
import {ThemedText} from "@/components/common/ThemedText";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "./_layout";
import Button from "@/components/common/Button";
import { safeAreaViewStyle } from "@/constants/styles";

type RegisterProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
}

type UserData = {
  email: string;
  password: string;
  samePassword: string;
}

export default function RegisterView({navigation}: RegisterProps) {
  const [userData, setUserData] = useState<UserData>({email: '', password: '', samePassword: ''});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
      default:
        throw new Error(`There is no validation for this type of field ${type}`);
    }
  }

  const handleRegistration = async () => {
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
      const data = await registrationApi(userData.email, userData.password);
      alert('Регистрация прошла успешно!');
      navigation.navigate('Login')
    } catch (error) {
      alert(error);
    }
  }

  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView style={safeAreaViewStyle.safeAreaView}>
          <ThemedText fontSize={24}>Зарегистрироваться</ThemedText>
          <BlankCard>
            <Text>Введите свою почту</Text>
            <TextInput
              inputMode='email'
              textContentType='emailAddress'
              placeholder="example@gmail.com"
              value={userData.email}
              onChangeText={(text: string) => setUserData({...userData, email: text})}
            />

            <Text>Введите свой пароль</Text>
            <TextInput placeholder={isPasswordVisible ? "12345678" : "********"}
                       secureTextEntry={!isPasswordVisible}
                       value={userData.password}
                       onChangeText={(text: string) => setUserData({...userData, password: text})}
            />

            <Text>Подтвердите пароль</Text>
            <TextInput placeholder={isPasswordVisible ? "12345678" : "********"}
                       secureTextEntry={!isPasswordVisible}
                       value={userData.samePassword}
                       onChangeText={(text: string) => setUserData({...userData, samePassword: text})}
            />
           <Button title={isPasswordVisible ? "Скрыть пароль" : "Показать пароль"}
                    onPress={togglePasswordVisibility}/>
          </BlankCard>
          <Button
            title="Зарегистрироваться"
            onPress={handleRegistration}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <ThemedText>Войти</ThemedText>
          </TouchableOpacity>
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  );
}
