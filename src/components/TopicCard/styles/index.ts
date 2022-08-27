import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  topic: {
    borderColor: "#ddd",
    borderWidth: widthPercentageToDP("0.3"),
    borderRadius: widthPercentageToDP("1"),
    margin: heightPercentageToDP("2"),
    padding: widthPercentageToDP("5"),
  },
  topicText: {
    fontFamily: "Lora",
    fontSize: widthPercentageToDP("2"),
    fontWeight: "600",
  },
});
