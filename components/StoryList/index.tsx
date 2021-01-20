import React from "react";
import {FlatList, Image, View} from "react-native";
import styles from "./style";
import stories from "../../data/stories";
import StoryItem from "../StoryItem";

const StoryList = () => {
    return (
        <FlatList
            style={styles.container}
            data={stories}
            renderItem={({ item }) => <StoryItem story={item}/>}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default StoryList
