import React, {ReactElement} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import BlankCard from "@/components/common/BlankCard";

interface AddTransactionButtonProps {
  title: string;
  icon?: ReactElement;
  onPress: () => void;
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  flex?: number;
}

export default function Button({
                                 title,
                                 icon,
                                 onPress,
                                 justifyContent = 'center',
                                 flex,
                               }: AddTransactionButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, {flex}]}>
      <BlankCard>
        <View style={[styles.container, {justifyContent}]}>
          <Text>{title}</Text>
          {icon}
        </View>
      </BlankCard>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
});
