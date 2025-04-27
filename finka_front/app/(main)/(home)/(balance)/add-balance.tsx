import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/common/ThemedView';
import { safeAreaViewStyle } from '@/constants/styles';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './_layout';
import { StyleSheet, Text, View } from "react-native";
import BlankCard from "@/components/common/BlankCard";
import { themedTextStyle } from "@/constants/styles/themedTextStyle";
import Button from "@/components/common/Button";
import LabelWithValue from "@/components/common/LabelWithValue";
import { BalanceItemProps } from "@/types/BalanceItemProps.type";
import { useNavigation } from 'expo-router';

type AddBalanceViewProps = {
  route: RouteProp<RootStackParamList, 'add-balance'>;
};

const LABELS = [
  {
    label: 'Название',
    editable: true,
  },
  {
    label: 'Сумма',
    editable: true,
  },
  {
    label: 'Дата начала',
    editable: true,
  },
  {
    label: 'Дата окончания',
    editable: true,
  },
  {
    label: 'Время',
  },
]

export default function AddBalanceView({ route }: AddBalanceViewProps) {
  const { title, buttons, data } = route.params;
  const navigation = useNavigation();

  const [spendingData, setSpendingData] = React.useState<BalanceItemProps>({
    name: data?.name || '',
    balance: data?.balance || '',
    start_date: data?.start_date || '',
    end_date: data?.end_date || '',
    time: data?.time || undefined,
  });

  const handleLeftPress = async () => {
    if (buttons.left.fetchData) {
      const id = data?.id || '';
      if (id) {
        const response = await buttons.left.fetchData({
          id: id,
          name: spendingData.name,
          balance: spendingData.balance,
          start_date: spendingData.start_date,
          end_date: spendingData.end_date,
        });
        if (response) {
          alert('Остаток успешно изменен!');
          navigation.navigate('Balance');
        } else {
          alert('Что-то пошло не так, попробуйте позже.');
        }
      }
      else {
        const response = await buttons.left.fetchData({
          name: spendingData.name,
          balance: spendingData.balance,
          start_date: spendingData.start_date,
          end_date: spendingData.end_date,
        });
        if (response) {
          alert('Новый остаток успешно добавлен!');
          navigation.navigate('Balance');
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
        alert('Остаток успешно удален!');
        navigation.navigate('Balance');
      } else {
        alert('Что-то пошло не так, попробуйте позже.');
      }
    }
    if (buttons.right.onPress) {
      buttons.right.onPress();
    }
  };

  const handleInputChange = (key: keyof BalanceItemProps, value: string) => {
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
                  const key = Object.keys(spendingData)[index] as keyof BalanceItemProps;
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