import { ThemedView } from "@/components/common/ThemedView";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { ThemedText } from "@/components/common/ThemedText";
import BlankCard from "@/components/common/BlankCard";
import { safeAreaViewStyle } from "@/constants/styles";
import LabelWithValue from "@/components/common/LabelWithValue";
import { AccountProps } from "@/types/AccountProps.type";
import { changeAccountDataApi, postHelpMessage } from "@/api/userApi";
import Button from "@/components/common/Button";
import { emailHandler } from "@/functioins/formHandler/emailHandler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useRoute } from '@react-navigation/native';

const LABELS = [
  {
    label: 'Имя',
    editable: true,
  },
  {
    label: 'Фамилия',
    editable: true,
  },
  {
    label: 'Почта',
    editable: true,
  },
];

const HELP = [
  {
    label: 'Ссылка на телеграм',
    editable: true,
  },
  {
    label: 'Сообщение',
    editable: true,
  },
];

type HelpProps = {
  tg: string,
  message: string,
};

export default function AccountView() {
  const [userData, setUserData] = useState<AccountProps>({
    name: '',
    surname: '',
    email: '',
  });
  const [helpData, setHelpData] = useState<HelpProps>({
    tg: '',
    message: '',
  });

  const handleInputChange = (key: keyof AccountProps, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleHelpInputChange = (key: keyof HelpProps, value: string) => {
    setHelpData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const route = useRoute();

  function manualParseJWT(token: string) {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        throw new Error("Invalid JWT format");
      }

      const payload = JSON.parse(atob(parts[1]));
      return payload;
    } catch (error) {
      console.error("Error parsing JWT:", error);
      return null;
    }
  }

  useEffect(() => {
    const getAccountDataFunc = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('access');
        if (accessToken) {
          const tokenData = manualParseJWT(accessToken);
          setUserData({
            name: tokenData.name,
            surname: tokenData.surname,
            email: tokenData.email,
          });
        }
      } catch {
        router.replace("/(login)/(auth)");
      }
    }

    getAccountDataFunc();
  }, [route]);

  const checkDataErrors = (type: string, value: string) => {
    switch (type) {
      case 'email':
        return emailHandler(value);
      case 'name':
        return value.trim() === '' ? 'Введите имя' : 'success';
      case 'surname':
        return value.trim() === '' ? 'Введите фамилию' : 'success';
      default:
        throw new Error(`There is no validation for this type of field ${type}`);
    }
  }

  const handleChangeData = async () => {
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
    const response = await changeAccountDataApi(userData.email, userData.name, userData.surname);
    if (response) {
      alert('Данные успешно изменены!');
    } else {
      alert('Что-то пошло не так, попробуйте позже.');
    }
  };

  const handleHelp = async () => {
    const response = await postHelpMessage(helpData.message, helpData.tg);
    if (response) {
      alert('Сообщение успешно отправлено!');
      setHelpData({
        message: '',
        tg: '',
      });
    } else {
      alert('Что-то пошло не так, попробуйте позже.');
    }
  }

  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView style={safeAreaViewStyle.safeAreaView}>
          <ThemedText fontSize={24}>Личный аккаунт</ThemedText>
          <BlankCard>
            <View style={styles.formContainer}>
              {LABELS.map((label, index) => {
                const key = Object.keys(userData)[index] as keyof AccountProps;
                if (userData[key] !== undefined) {
                  return (
                    <LabelWithValue
                      key={label.label}
                      label={label.label}
                      value={String(userData[key])}
                      editable={label.editable}
                      onChangeText={(value) => handleInputChange(key, value)}
                    />
                  );
                }
              })}
            </View>
          </BlankCard>
          <Button title="Изменить информацию" onPress={async () => await handleChangeData()} />
          <BlankCard>
            <Text>Оставить обратную связь</Text>
            <View style={styles.formContainer}>
              {HELP.map((label, index) => {
                const key = Object.keys(helpData)[index] as keyof HelpProps;
                if (helpData[key] !== undefined) {
                  return (
                    <LabelWithValue
                      key={label.label}
                      label={label.label}
                      value={String(helpData[key])}
                      editable={label.editable}
                      onChangeText={(value) => handleHelpInputChange(key, value)}
                    />
                  );
                }
              })}
            </View>
            <Button title="Оставить сообщение" onPress={async () => await handleHelp()} />
          </BlankCard>
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    gap: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formContainer: {
    flex: 1,
    gap: 8,
  },
  container: {
    gap: 12,
    width: '100%',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
});