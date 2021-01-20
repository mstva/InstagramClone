import React from "react";
import {TextInput, View} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";


const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputSearch} placeholder={'Search'} />
            <Ionicons name={'ios-search'} size={24} color={'black'}/>
        </View>
    )
}

export default SearchBar
