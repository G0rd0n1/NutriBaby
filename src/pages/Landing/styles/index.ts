import { StyleSheet } from "react-native";
import {heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    container: {
        marginVertical: heightPercentageToDP("2"),
    },
    logo: {
        fontFamily: "Lobster",
        fontSize: widthPercentageToDP("3"), 
        fontWeight: "600",
        flexDirection: "column",
        alignSelf: "center",
        marginBottom: heightPercentageToDP("5"),
    },
    hero: {
        alignSelf: "center",
        fontFamily: "Lora",
        fontSize: widthPercentageToDP("3"), 
        fontWeight: "600",
        flexDirection: "column",
        marginTop: heightPercentageToDP("20")
    },
    description: {
        textAlign: "center",
        fontFamily: "Lora",
        fontSize: widthPercentageToDP("3"), 
        fontWeight: "600",
        flexDirection: "column",
        marginHorizontal: widthPercentageToDP("15")
    },
    buttonContainer: { 
        fontSize: widthPercentageToDP("3"), 
        fontWeight: "600",
        flexDirection: "column",
        marginHorizontal: widthPercentageToDP("40"),
        marginVertical: heightPercentageToDP("5"),
    },
    button: {
        backgroundColor: "#000",
        textAlign: "center",
        fontWeight: "600",
        paddingVertical: heightPercentageToDP("5"),
        paddingHorizontal: widthPercentageToDP("2"),
        borderRadius: widthPercentageToDP("1"),
        flexDirection: "column",
    },
    buttonText: {
        color: "#fff",
        fontFamily: "Lora",
        fontSize: widthPercentageToDP("2"), 
        fontWeight: "600",
    },
});
