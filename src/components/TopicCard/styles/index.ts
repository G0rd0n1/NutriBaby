import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  topic: {
    shadowColor: "#606060",
    shadowOffset: {
      width: widthPercentageToDP("2"),
      height: heightPercentageToDP("2"),
    },
    shadowOpacity: 0.6,
    shadowRadius: 30,
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
