import {StyleSheet, View} from "react-native";
import {PropsWithChildren} from "react";

export default function Layout({children}: PropsWithChildren) {
    return (
        <View style={styles.view}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        gap: 16,
        backgroundColor: 'pink',
    },
});
