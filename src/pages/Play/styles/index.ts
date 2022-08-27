import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    marginVertical: heightPercentageToDP("2"),
  },
  hero: {
    alignSelf: "center",
    flexDirection: "column",
    marginTop: heightPercentageToDP("6"),
  },
  description: {
    flexDirection: "column",
    fontFamily: "Lora",
    fontSize: widthPercentageToDP("2.5"),
    fontWeight: "600",
    marginHorizontal: widthPercentageToDP("15"),
    textAlign: "center",
  },
  topicsContainer: {
    alignSelf: "center",
    flexDirection: "row",
    marginVertical: heightPercentageToDP("5"),
  },
  check: {
    backgroundColor: "#eee",
    marginTop: heightPercentageToDP("10"),
    borderRadius: widthPercentageToDP("1"),
  },
  checkText: {
    fontFamily: "Lora",
    color: "#aaa",
    fontSize: widthPercentageToDP("2"),
    paddingHorizontal: widthPercentageToDP("4"),
    paddingVertical: heightPercentageToDP("3"),
  },
});
