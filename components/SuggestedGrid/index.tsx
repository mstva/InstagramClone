import React, {Component} from "react";
import {FlatList, Image, View} from "react-native";
import styles from "./style";
import stories from "../../data/stories";
import StoryItem from "../StoryItem";
import suggestions from "../../data/suggestions";
import SuggestedItem from "../SuggestedItem";


const formatData = (data: any, numColumns: number) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};

const numColumns = 3;

export default class SuggestedGrid extends Component {
    render() {
        return (
            <FlatList
                style={styles.container}
                data={formatData(suggestions, numColumns)}
                renderItem={({ item }) => <SuggestedItem suggestion={item}/>}
                keyExtractor={item => item.id}
                numColumns={numColumns}
                showsHorizontalScrollIndicator={false}
            />
        )
    }
}

