import React from "react";
import {Text, View} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import { AppLoading } from 'expo';
import {useFonts, Romanesco_400Regular} from '@expo-google-fonts/romanesco'

const Header = () => {
    let [fontsLoaded] = useFonts({Romanesco_400Regular})
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return(
            <View style={styles.container}>
                <Ionicons name="ios-camera" size={30} color="black" />
                <Text style={[styles.textLogo, { fontFamily: 'Romanesco_400Regular' }]}>instagram</Text>
                <Ionicons name="ios-send" size={30} color="black" />
            </View>
        )
    }
}

export default Header
