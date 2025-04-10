import React from 'react';
import {View, StyleSheet, Text, TextInput, Alert} from 'react-native';
import BlankCard from '@/components/common/BlankCard';
import Button from "@/components/common/Button";
import {themedTextStyle} from "@/constants/styles/themedTextStyle";
import {SpendingsItemProps} from "@/types/SpendingsItemProps.type";
import {ButtonProps} from "@/types/ButtonProps.type";

type AddTransactionProps = {
  data: SpendingsItemProps;
  buttons: {
    left: {
      title: string;
      onPress: ({...params}: SpendingsItemProps) => any;
    };
    right: ButtonProps;
  };
  title: string;
};

export default function AddTransaction({data, buttons, title}: AddTransactionProps) {
  const handlePress = async () => {
    const response = await buttons.left.onPress(data);
    if (response) {
      Alert.alert(
        'Успех',
        'Новая трата успешно добавлена!',
        [
          {
            text: 'Супер!',
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <BlankCard>
        <Text style={themedTextStyle.text}>{title}</Text>
        <View style={styles.formContainer}>
          {Object.entries(data)?.map(([key, value]) => (
            <View style={styles.row}>
              <Text key={key}>{key}</Text>
              <TextInput>
                {value || ''}
              </TextInput>
            </View>
          ))}
        </View>
      </BlankCard>
      <View style={styles.buttonsContainer}>
        <Button
          title={buttons.left.title}
          onPress={handlePress}
          flex={1}
        />
        <Button
          flex={1}
          title={buttons.right.title}
          onPress={buttons.right.onPress}
        />
      </View>
    </View>
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
  }
});

