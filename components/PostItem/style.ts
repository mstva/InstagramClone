import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.background,
        marginVertical: 5,
    },
    postHeader: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10
    },
    outUserImageContainer: {
        marginHorizontal: 5,
        marginTop: 10,
        marginBottom: 5,
        marginEnd: 15,
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: Colors.light.tint,
        justifyContent: "center",
        alignItems: "center"
    },
    inUserImageContainer: {
        width: 54,
        height: 54,
        borderRadius: 54,
        backgroundColor: Colors.light.background,
        justifyContent: "center",
        alignItems: "center"
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    nameContainer: {
        flex: 1
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
    },
    postDate: {
        fontSize: 12,
        color: 'grey',
        marginTop: 2
    },
    postBody: {},
    postImage: {
        width: Dimensions.get('window').width,
        height: 400,
    },
    postFooter: {
        padding: 10,
    },
    postReaction: {
        flexDirection: "row",
    },
    postCounter: {
        flexDirection: "row",
        paddingVertical: 10,
        justifyContent: "space-between"
    },
    postAddComment: {
        flexDirection: "row",
        paddingTop: 10,
        borderTopWidth: 0.3,
        borderTopColor: 'grey'
    },
    inputComment: {
        flex: 1,
        paddingHorizontal: 10
    },
    addComment: {
        color: Colors.light.tint,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    }
})

export default styles
