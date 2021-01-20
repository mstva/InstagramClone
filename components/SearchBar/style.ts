import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 2,
        width: Dimensions.get('window').width - 20,
        margin: 10
    },
    inputSearch: {
        flex: 1
    }
})

export default styles
