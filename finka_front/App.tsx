import AppNavigator from "./navigation/AppNavigator";
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";

Parse.setAsyncStorage(AsyncStorage);
const PARSE_APPLICATION_ID: string = 'APPLICATION_ID';
const PARSE_HOST_URL: string = 'HOST_URL';
const PARSE_JAVASCRIPT_ID: string = 'JAVASCRIPT_ID';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_ID);
Parse.serverURL = PARSE_HOST_URL;

export default function App() {
  return (
      <>
            <AppNavigator/>
        </>
  );
}
