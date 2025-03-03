import {View, Text} from "react-native";
import {useState} from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface TransactionApi {
    transactionApi: (time1: string, time2: string) => {};
}

interface Dates {
    time1: string;
    time2: string;
}

export default function ShowTransactionsFromTimeToTimeToTime(transactionApi: TransactionApi) {

    const [money, setMoney] = useState<number>(0);
    const [inputDates, setInputDates] = useState<Dates>({time1: '', time2: ''});

    return (
        <View>
            <Text>С</Text>
            <DateTimePickerModal
                mode="date"
                onConfirm={(inputValue: string) => setInputDates({...inputDates, time1: inputValue})}
             onCancel={() => setInputDates({...inputDates, time1: ''})}/>

            <Text>По</Text>
            <DateTimePickerModal
                mode="date"
                onConfirm={(inputValue: string) => setInputDates({...inputDates, time2: inputValue})}
                onCancel={() => setInputDates({...inputDates, time2: ''})}/>

            <Text>{money} ₽</Text>
        </View>
    )
}