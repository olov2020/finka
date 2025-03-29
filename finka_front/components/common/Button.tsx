import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import BlankCard from "@/components/common/BlankCard";
import {ReactElement} from "react";

interface AddTransactionButtonProps {
    title: string;
    icon?: ReactElement;
    onPress: () => void;
}

export default function Button({title, icon, onPress}: AddTransactionButtonProps) {
    return (
        <BlankCard>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text>{title}</Text>
                {icon}
            </TouchableOpacity>
        </BlankCard>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
