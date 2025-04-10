import React from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';

type BlankCardProps = ViewProps & {
    flex?: number;
};

export default function BlankCard({ children, flex, ...props }: BlankCardProps) {
    return (
        <View style={[styles.view, { flex }]} {...props}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        gap: 20,
        boxSizing: 'border-box',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 36,
    },
});
