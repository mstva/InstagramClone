import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: Dimensions.get("window").width,
        alignItems: "center",
        backgroundColor: Colors.light.background,
        marginTop: 10,
        paddingHorizontal: 30,
        paddingBottom: 5,
    },
    textLogo: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10
    }
})

export default styles
