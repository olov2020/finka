import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

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
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      {editable ? (
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <Text>{value}</Text>
      )}
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
