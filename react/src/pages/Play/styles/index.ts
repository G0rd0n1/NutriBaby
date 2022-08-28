import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    marginVertical: heightPercentageToDP("2"),
  },
  loading: {
    marginHorizontal: widthPercentageToDP("15"),
    marginVertical: widthPercentageToDP("5"),
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
  checkContainer: {
    flexDirection: "row",
    borderTopColor: "#eee",
    borderTopWidth: heightPercentageToDP("1"),
    marginTop: heightPercentageToDP("10"),
    paddingVertical: heightPercentageToDP("3"),
    justifyContent: "space-between",
  },
  answer: {
    flexDirection: "row",
    borderTopColor: "#eee",
    borderTopWidth: heightPercentageToDP("1"),
    marginTop: heightPercentageToDP("10"),
    paddingVertical: heightPercentageToDP("3"),
    justifyContent: "space-between",
  },
  check: {
    backgroundColor: "#61E002",
    borderRadius: widthPercentageToDP("1"),
  },
  checkDisabled: {
    backgroundColor: "#eee",
    borderRadius: widthPercentageToDP("1"),
  },
  checkSkip: {
    borderColor: "#eee",
    borderWidth: heightPercentageToDP("1"),
    backgroundColor: "#fff",
    borderRadius: widthPercentageToDP("1"),
  },
  checkText: {
    fontFamily: "Lora",
    fontSize: widthPercentageToDP("2"),
    paddingHorizontal: widthPercentageToDP("4"),
    paddingVertical: heightPercentageToDP("3"),
    fontWeight: "600",
  },
  checkUseful: {
    fontFamily: "Lora",
    fontWeight: "600",
    color: "#aaa",
  },
  containerIncorrect: {
    flexDirection: "row",
    backgroundColor: "#FFDFE0",
    borderTopColor: "#FF5252",
    borderTopWidth: heightPercentageToDP("1"),
    marginTop: heightPercentageToDP("10"),
    paddingVertical: heightPercentageToDP("3"),
    paddingHorizontal: widthPercentageToDP("3"),
  },
  containerCorrect: {
    flexDirection: "row",
    backgroundColor: "#D7FFB8",
    borderTopColor: "#61E002",
    borderTopWidth: heightPercentageToDP("1"),
    marginTop: heightPercentageToDP("10"),
    paddingVertical: heightPercentageToDP("3"),
    paddingHorizontal: widthPercentageToDP("3"),
  },
  incorrectBtn: {
    backgroundColor: "#FF5252",
    paddingVertical: heightPercentageToDP("3"),
    paddingHorizontal: widthPercentageToDP("2"),
    borderRadius: widthPercentageToDP("1"),
  },
  incorrectText: {
    color: "#fff",
    fontFamily: "Lora",
    fontWeight: "600",
    fontSize: widthPercentageToDP("2  "),
  },
  correctBtn: {
    backgroundColor: "#61E002",
    paddingVertical: heightPercentageToDP("3"),
    paddingHorizontal: widthPercentageToDP("2"),
    borderRadius: widthPercentageToDP("1"),
  },
  correctText: {
    color: "#fff",
    fontFamily: "Lora",
    fontWeight: "600",
    fontSize: widthPercentageToDP("2  "),
  },
  answerContainer: {
    marginHorizontal: widthPercentageToDP("2"),
  },
  answerText: {
    fontFamily: "Lora",
    fontWeight: "600",
  },
  answerHeading: {
    fontSize: widthPercentageToDP("2"),
  },
});
