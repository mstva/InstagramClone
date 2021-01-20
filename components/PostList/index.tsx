import React from "react";
import {FlatList} from "react-native";
import posts from "../../data/posts";
import PostItem from "../PostItem";

const PostList = () => {
    return (
        <FlatList
            data={posts}
            renderItem={({item}) => <PostItem post={item}/>}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default PostList
