import { ThemedView } from "@/components/common/ThemedView";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { usePathname } from "expo-router";
import React, { useEffect, useState } from "react";
import { ThemedText } from "@/components/common/ThemedText";
import BlankCard from "@/components/common/BlankCard";
import { safeAreaViewStyle } from "@/constants/styles";
import LabelWithValue from "@/components/common/LabelWithValue";
import { AccountProps } from "@/types/AccountProps.type";
import { changeAccountDataApi, getAccountDataApi } from "@/api/userApi";
import Button from "@/components/common/Button";
import { emailHandler } from "@/functioins/formHandler/emailHandler";

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
]

export default function AccountView() {
  const [userData, setUserData] = useState<AccountProps>({
    name: '',
    surname: '',
    email: '',
  });

  const handleInputChange = (key: keyof AccountProps, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const pathname = usePathname();

  // TODO: rewrite to getting data from access_token
  useEffect(() => {
    const getAccountDataFunc = async () => {
      const data: AccountProps = await getAccountDataApi();
      setUserData(data);
    }

    getAccountDataFunc();
  }, [pathname]);

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
    const id = 0;
    const data = await changeAccountDataApi(userData.email, userData.name, userData.surname, id);
  };

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
          <Button title="Изменить информацию" onPress={handleChangeData} />
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