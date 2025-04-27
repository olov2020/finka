import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

type LabelWithValueProps = {
  label: string;
  value: string;
  editable?: boolean;
  onChangeText?: (text: string) => void;
};

export default function LabelWithValue({
  label,
  value,
  editable = false,
  onChangeText,
}: LabelWithValueProps) {
  const getTime = (value: string) => {
    const date = new Date(value);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    return timeString;
  }

  const checkFormat = (value: string) => {
    const utcRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d{1,3})?Z$/;
    return utcRegex.test(value) ? getTime(value) : value;
  }

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      {
        editable ? (
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
          />
        ) : (
          <Text>{checkFormat(value)}</Text>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginTop: 4,
  },
});
