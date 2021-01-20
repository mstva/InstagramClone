import React from "react";
import {Image, Text, TextInput, View} from "react-native";
import styles from "./style";
import {Post} from "../../types";
import {Entypo, EvilIcons, Feather, Ionicons} from '@expo/vector-icons';
import moment from "moment";

export type PostItemProps = { post: Post }

const PostItem = (props: PostItemProps) => {
    const { post } = props
    return (
        <View style={styles.container}>
            <View style={styles.postHeader}>
                <View style={styles.outUserImageContainer}>
                    <View style={styles.inUserImageContainer}>
                        <Image source={{ uri: post.userImageUri }} style={styles.userImage}/>
                    </View>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.username}>{post.username}</Text>
                    <Text style={styles.postDate}>{moment(post.createdAt).fromNow()}</Text>
                </View>
                <Entypo name="dots-three-horizontal" size={24} color="black" />
            </View>
            <View style={styles.postBody}>
                <Image source={{ uri: post.postImageUri}} style={styles.postImage}/>
            </View>
            <View style={styles.postFooter}>
                <View style={styles.postReaction}>
                    <Ionicons name="ios-heart-empty" size={24} color="black" />
                    <EvilIcons style={{flex: 1}} name="comment" size={30} color="black" />
                    <Feather name="send" size={24} color="black" />
                    <Feather name="bookmark" size={24} color="black" />
                </View>
                <View style={styles.postCounter}>
                    <Text>{post.likesCount} likes</Text>
                    <Text>{post.commentsCount} comments</Text>
                </View>
                <View style={styles.postAddComment}>
                    <TextInput style={styles.inputComment} placeholder={'Add a comment'}/>
                    <Text style={styles.addComment}>Post</Text>
                </View>
            </View>
        </View>
    )
}

export default PostItem
