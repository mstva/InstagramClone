import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    outStoryContainer: {
        marginHorizontal: 5,
        marginTop: 10,
        marginBottom: 5,
        width: 75,
        height: 75,
        borderRadius: 75,
        backgroundColor: Colors.light.tint,
        justifyContent: "center",
        alignItems: "center"
    },
    inStoryContainer: {
        width: 69,
        height: 69,
        borderRadius: 69,
        backgroundColor: Colors.light.background,
        justifyContent: "center",
        alignItems: "center"
    },
    story: {
        width: 65,
        height: 65,
        borderRadius: 65
    },
    name: {
        fontWeight: "bold"
    }
})

export default styles
