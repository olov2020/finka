import React, {useEffect, useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {ThemedView} from '@/components/common/ThemedView';
import Button from '@/components/common/Button';
import {safeAreaViewStyle} from '@/constants/styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './_layout';
import {ThemedText} from "@/components/common/ThemedText";
import {addReminderApi} from "@/api/reminderApi";
import ListOfReminders from "@/app/(main)/(home)/(reminder)/ListOfReminders";
import {ReminderItemProps} from "@/types/ReminderItemProps.type";

type SpendingsViewProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Reminder'>;
};

export default function ReminderView({navigation}: SpendingsViewProps) {
  const [data, setData] = React.useState<ReminderItemProps[]>();

  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView style={safeAreaViewStyle.safeAreaView}>
          <ThemedText>Ваши напоминания</ThemedText>

          <Button
            title="Добавить напоминание"
            icon={<Text>+</Text>}
            justifyContent="space-between"
            onPress={() => {
              navigation.navigate('add-reminder', {
                title: 'Добавить напоминание',
                buttons: {
                  left: {
                    title: 'Добавить',
                    onPress: () => addReminderApi,
                  },
                  right: {
                    title: 'Отмена',
                    onPress: () => navigation.goBack(),
                  },
                },
              });
            }}
          />

          <ListOfReminders
            title="Список напоминаний"
            data={data}
            navigation={navigation}
          />
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  );
}
