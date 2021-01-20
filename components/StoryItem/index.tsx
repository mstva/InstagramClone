import React from "react";
import {Image, Text, View} from "react-native";
import styles from "./style";
import {Story} from "../../types";

export type StoryItemProps = { story: Story }

const StoryItem = (props: StoryItemProps) => {
    const { story } = props
    return (
        <View style={styles.container}>
            <View style={styles.outStoryContainer}>
                <View style={styles.inStoryContainer}>
                    <Image source={{ uri: story.imageUri }} style={styles.story}/>
                </View>
            </View>
            <Text style={styles.name}>{story.name}</Text>
        </View>
    )
}

export default StoryItem
