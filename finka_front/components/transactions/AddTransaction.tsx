import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import BlankCard from '@/components/common/BlankCard';
import {safeAreaViewStyle, titleTextStyle} from "@/constants/styles";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {ThemedView} from "@/components/common/ThemedView";
import Button from "@/components/common/Button";
import {themedTextStyle} from "@/constants/styles/themedTextStyle";

type AddTransactionProps = {
  data: {
    name: string;
    value?: string | number;
    editable?: boolean;
  }[];
  buttons: {
    left: {
      title: string;
      onPress: () => void;
    };
    right: {
      title: string;
      onPress: () => void;
    };
  };
  title: string;
};

export default function AddTransaction({data, buttons, title}: AddTransactionProps) {
  return (
    <View style={styles.container}>
      <BlankCard>
        <Text style={themedTextStyle.text}>{title}</Text>
        <View style={styles.formContainer}>
        {data?.map((rowData, index) => (
          <Text key={index}>{rowData.name} - {rowData.value ?? ''}</Text>
        ))}
        </View>
      </BlankCard>
      <View style={styles.buttonsContainer}>
        <Button
          title={buttons.left.title}
          onPress={buttons.left.onPress}
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
  }
});

