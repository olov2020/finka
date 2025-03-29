import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import BlankCard from "@/components/common/BlankCard";

type AddTransactionButtonProps = {
    title: string;
    onPress: () => void;
}

export default function AddTransactionButton({title, onPress}: AddTransactionButtonProps) {

    // TODO
    // style component and add image of plus (after redesign)
    return (
        <BlankCard>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text>{title}</Text>
                <Text>+</Text>
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
