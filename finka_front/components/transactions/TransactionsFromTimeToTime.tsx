import {View, Text, TextInput, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import {format} from 'date-fns';
import BlankCard from "@/components/common/BlankCard";
import { TextInputMask } from 'react-native-masked-text';
import {titleTextStyle} from '@/constants/styles';
import {input} from "sucrase/dist/types/parser/traverser/base";
import {themedTextStyle} from "@/constants/styles/themedTextStyle";

interface TransactionsFromTimeToTimeProps {
    transactionApi: (time1: string, time2: string) => {};
    title: string;
}

interface Dates {
    time1: string;
    time2: string;
}

export default function TransactionsFromTimeToTime({transactionApi, title}: TransactionsFromTimeToTimeProps) {

    const [money, setMoney] = useState(0);
    const currentDate = new Date();
    const firstDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const [inputDates, setInputDates] = useState<Dates>({
        time1: format(firstDateOfMonth, 'dd.MM.yyyy'),
        time2: format(currentDate, 'dd.MM.yyyy'),
    });

    /*useEffect(() => {
        if (new Date(inputDates.time1) > currentDate) {
            setInputDates({...inputDates, time1: currentDate});
        }
    }, [inputDates]);*/

    return (
        <BlankCard>
            <Text style={themedTextStyle.text}>{title}</Text>
            <View style={styles.container}>
                <Text>С</Text>
                <TextInputMask
                    type={'datetime'}
                    options={{
                        format: 'DD.MM.YYYY',
                    }}
                    style={styles.input}
                    value={inputDates.time1}
                    onChangeText={(value) => setInputDates({...inputDates, time1: value})}
                />
                <Text>По</Text>
                <TextInputMask
                    type={'datetime'}
                    options={{
                        format: 'DD.MM.YYYY',
                    }}
                    style={styles.input}
                    value={inputDates.time2}
                    onChangeText={(value) => setInputDates({...inputDates, time2: value})}
                />
                <Text>{money} ₽</Text>
            </View>
        </BlankCard>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(221, 223, 224, 0.3)',
        borderRadius: 2,
        padding: 4,
        width: '30%',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
    }
});
