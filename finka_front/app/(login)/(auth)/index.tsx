import {ThemedView} from "@/components/common/ThemedView";
import {StyleSheet, TextInput, View, Text, TouchableOpacity} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Button} from "@rneui/themed";
import {router} from "expo-router";
import {useState} from "react";
import {loginApi} from "@/api/userApi";
import {emailHandler} from '@/functioins/formHandler/emailHandler';
import {passwordHandler} from '@/functioins/formHandler/passwordHandler';
import {ThemedText} from "@/components/common/ThemedText";
import BlankCard from "@/components/common/BlankCard";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "./_layout";
import {navigate} from "expo-router/build/global-state/routing";

type LoginProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

type UserData = {
  email: string;
  password: string;
}

export default function LoginView({navigation}: LoginProps) {
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

  const loginFunc = async () => {
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
  }

  return (
    <SafeAreaProvider>
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.innerContainer}>
          <ThemedText>Войти</ThemedText>

          <BlankCard>
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
          </BlankCard>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <ThemedText>Зарегистрироваться</ThemedText>
          </TouchableOpacity>

          {/*<Button
            onPress={loginFunc}
          >
            Войти
          </Button>*/}

          <Button
            onPress={() => router.replace("/(main)/(home)")}
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