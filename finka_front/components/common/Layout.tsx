import {StyleSheet, View, ViewProps} from "react-native";

export default function Layout({children}: ViewProps) {
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
