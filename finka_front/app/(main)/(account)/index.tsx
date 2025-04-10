import {ThemedView} from "@/components/common/ThemedView";
import {SafeAreaView, StyleSheet, View, Text, TextInput, Alert} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {usePathname} from "expo-router";
import React, {useEffect, useState} from "react";
import {ThemedText} from "@/components/common/ThemedText";
import BlankCard from "@/components/common/BlankCard";
import {safeAreaViewStyle} from "@/constants/styles";
import LabelWithValue from "@/components/common/LabelWithValue";
import {AccountProps} from "@/types/AccountProps.type";

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
    name: 'vova',
    surname: 'vinogradov',
    email: 'vova@gmail.com',
  });

  const handleInputChange = (key: keyof AccountProps, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const pathname = usePathname();

  /*useEffect( () => {
      const getAccountDataFunc = async() => {
          const data: AccountData = await getAccountDataApi();
          setUserData(data);
      }

      getAccountDataFunc();
  }, [pathname]);*/

  if (!userData) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView style={safeAreaViewStyle.safeAreaView}>
          <ThemedText>Личный аккаунт</ThemedText>

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