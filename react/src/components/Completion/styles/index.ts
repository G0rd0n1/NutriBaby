import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  completionContainer: {
    backgroundColor: "#ddd",
    height: heightPercentageToDP("3"),
    borderRadius: widthPercentageToDP("1"),
    marginBottom: heightPercentageToDP("10"),
  },
  completionProgress: {
    height: heightPercentageToDP("3"),
    borderRadius: widthPercentageToDP("1"),
    marginBottom: heightPercentageToDP("10"),
  },
  completionProgressShine: {
    height: heightPercentageToDP("1"),
    borderRadius: widthPercentageToDP("1"),
    marginTop: heightPercentageToDP("0.6"),
    marginHorizontal: widthPercentageToDP("0.6"),
  },
});
