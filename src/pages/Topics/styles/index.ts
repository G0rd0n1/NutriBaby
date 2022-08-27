import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    marginVertical: heightPercentageToDP("2"),
  },
  logo: {
    alignSelf: "center",
    flexDirection: "column",
    fontFamily: "Lobster",
    fontSize: widthPercentageToDP("3"),
    fontWeight: "600",
    marginBottom: heightPercentageToDP("3"),
  },
  hero: {
    alignSelf: "center",
    flexDirection: "column",
    marginTop: heightPercentageToDP("10"),
  },
  description: {
    flexDirection: "column",
    fontFamily: "Lora",
    fontSize: widthPercentageToDP("3"),
    fontWeight: "600",
    marginHorizontal: widthPercentageToDP("15"),
    textAlign: "center",
  },
  topicsContainer: {
    alignSelf: "center",
    flexDirection: "row",
    marginVertical: heightPercentageToDP("5"),
  },
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
