import {View, StyleSheet} from "react-native";
import {Button} from "@rneui/themed";

type AddTransactionProps = {
    title: string;
    type: 'addTransaction' | 'redactTransaction';
};

export default function AddTransaction({title, type} : AddTransactionProps) {
    return (
        <View>

            {type === 'addTransaction' ? (
                <View>
                    <Button style={styles.button}>Добавить</Button>
                    <Button>Отмена</Button>
                </View>
            ) : (
                <View>
                    <Button>Сохранить</Button>
                    <Button>Удалить</Button>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: '10px 12px',
        boxShadow: '4px 10px 36 0 rgba(0, 0, 0, 0.1)',
    }
})
