import {StyleSheet, View} from "react-native";
import {PropsWithChildren} from "react";

export default function BlankCard({children}: PropsWithChildren) {
    return (
        <View style={styles.view}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        width: '95%',
        gap: 16,
        backgroundColor: 'white',
        boxShadow: '4px 10px 36 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
        padding: 12,
    },
});
