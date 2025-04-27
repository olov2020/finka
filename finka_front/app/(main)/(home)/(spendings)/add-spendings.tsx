import React, { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/common/ThemedView';
import { safeAreaViewStyle } from '@/constants/styles';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './_layout';
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import BlankCard from "@/components/common/BlankCard";
import { themedTextStyle } from "@/constants/styles/themedTextStyle";
import Button from "@/components/common/Button";
import LabelWithValue from "@/components/common/LabelWithValue";
import { SpendingsItemProps } from "@/types/SpendingsItemProps.type";
import { router, useNavigation } from 'expo-router';

type AddSpendingsViewProps = {
  route: RouteProp<RootStackParamList, 'add-spendings'>;
};

const LABELS = [
  {
    label: 'Название',
    editable: true,
  },
  {
    label: 'Категория',
    editable: true,
  },
  {
    label: 'Цена',
    editable: true,
  },
  {
    label: 'Дата',
    editable: true,
  },
  {
    label: 'Время',
  },
]

export default function AddSpendingsView({ route }: AddSpendingsViewProps) {
  const { title, buttons, data } = route.params;
  const navigation = useNavigation();

  const [spendingData, setSpendingData] = React.useState<SpendingsItemProps>({
    name: data?.name || '',
    category: data?.category || '',
    price: data?.price || '',
    date: data?.date || '',
    time: data?.time || undefined,
  });

  const handleLeftPress = async () => {
    if (buttons.left.fetchData) {
      const id = data?.id || '';
      if (id) {
        const response = await buttons.left.fetchData({
          id: id,
          name: spendingData.name,
          category: spendingData.category,
          price: spendingData.price,
          date: spendingData.date,
        });
        if (response) {
          alert('Трата успешно изменена!');
          navigation.navigate('Spendings');
        } else {
          alert('Что-то пошло не так, попробуйте позже.');
        }
      }
      else {
        const response = await buttons.left.fetchData({
          name: spendingData.name,
          category: spendingData.category,
          price: spendingData.price,
          date: spendingData.date,
        });
        if (response) {
          alert('Новая трата успешно добавлена!');
          navigation.navigate('Spendings');
        } else {
          alert('Что-то пошло не так, попробуйте позже.')
        }
      }
    }
    if (buttons.left.onPress) {
      buttons.left.onPress();
    }
  };

  const handleRightPress = async () => {
    if (buttons.right.fetchData) {
      const response = await buttons.right.fetchData({
        id: data.id,
      });
      if (response) {
        alert('Трата успешно удалена!');
        navigation.navigate('Spendings');
      } else {
        alert('Что-то пошло не так, попробуйте позже.');
      }
    }
    if (buttons.right.onPress) {
      buttons.right.onPress();
    }
  };

  const handleInputChange = (key: keyof SpendingsItemProps, value: string) => {
    setSpendingData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView style={safeAreaViewStyle.safeAreaView}>
          <View style={styles.container}>
            <BlankCard>
              <Text style={themedTextStyle.text}>{title}</Text>
              <View style={styles.formContainer}>
                {LABELS.map((label, index) => {
                  const key = Object.keys(spendingData)[index] as keyof SpendingsItemProps;
                  if (spendingData[key] !== undefined) {
                    return (
                      <LabelWithValue
                        key={label.label}
                        label={label.label}
                        value={String(spendingData[key])}
                        editable={label.editable}
                        onChangeText={(value) => handleInputChange(key, value)}
                      />
                    );
                  }
                })}
              </View>
            </BlankCard>
            <View style={styles.buttonsContainer}>
              <Button
                title={buttons.left.title}
                onPress={handleLeftPress}
                flex={1}
              />
              <Button
                flex={1}
                title={buttons.right.title}
                onPress={handleRightPress}
              />
            </View>
          </View>
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