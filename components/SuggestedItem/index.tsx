import React from "react";
import {Image, Text, View} from "react-native";
import styles from "./style";
import {Suggestion} from "../../types";

export type SuggestedItemProps = { suggestion: Suggestion }

const SuggestedItem = (props: SuggestedItemProps) => {
    const { suggestion } = props
    return (
        <View style={styles.container}>
            <Image source={{ uri: suggestion.suggestedImageUri }} style={styles.suggestionContainer}/>
        </View>
    )
}

export default SuggestedItem
