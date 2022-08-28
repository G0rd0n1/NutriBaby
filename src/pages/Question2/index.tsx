import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { CompletionIndicator, Topic } from "../../components";
import { useCookies } from "react-cookie";

const Question2 = (): JSX.Element => {
  const [cookies] = useCookies(["MODE"]);
  const [showResult, setShowResult] = useState<any>(null);
  const [answer, setAnswer] = useState<string>("");

  useEffect((): void => {
    if (cookies.MODE === null || cookies.MODE === undefined) {
      window.location.replace("/");
    }
  }, [cookies.MODE]);

  const renderQuestion1 = (): JSX.Element => {
    return (
      <View>
        <Text
          allowFontScaling={false}
          selectable={false}
          style={styles.description}
        >
          Which type of diabetes requires insuline intake?
        </Text>
        <View style={styles.topicsContainer}>
          <TouchableOpacity
            onPress={() => setAnswer("type 2")}
            style={
              answer === "type 2"
                ? { borderColor: "#aaa", borderRadius: 20, borderWidth: 5 }
                : null
            }
          >
            <Topic colour="#fff" text="type 2" />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              answer === "type 1"
                ? { borderColor: "#aaa", borderRadius: 20, borderWidth: 5 }
                : null
            }
            onPress={() => setAnswer("type 1")}
          >
            <Topic colour="#fff" text="type 1" />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              answer === "both"
                ? { borderColor: "#aaa", borderRadius: 20, borderWidth: 5 }
                : null
            }
            onPress={() => setAnswer("both")}
          >
            <Topic colour="#fff" text="both" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleAnswerQ1 = (): void => {
    setShowResult(true);
  };

  const btnStyle =
    answer === "" || answer === null || answer === undefined
      ? styles.checkDisabled
      : styles.check;

  const renderInputs = (): JSX.Element => {
    return (
      <View style={styles.checkContainer}>
        <View style={styles.checkSkip}>
          <Text style={[styles.checkText, { color: "#bbb" }]}>Skip</Text>
        </View>
        <TouchableOpacity
          disabled={answer === "" || answer === null || answer === undefined}
          onPress={() => handleAnswerQ1()}
        >
          <View style={btnStyle}>
            <Text style={styles.checkText}>Check</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };



  const renderIncorrect = (): JSX.Element => {
    return (
      <View style={styles.containerIncorrect}>
        <View style={styles.answerContainer}>
          <Text style={[styles.answerText, styles.answerHeading]}>
            Correct answer
          </Text>
          <Text style={styles.answerText}>
            type 1 increases the risk of type 2 diabetes
          </Text>
          <Text style={styles.answerText}>
            people who smoke cigarettes are 30%-40% more likely to develop type
            2 diabetes than people who don't smoke
          </Text>
        </View>

        <TouchableOpacity onPress={() => alert("Next question")}>
          <View style={styles.incorrectBtn}>
            <Text style={styles.incorrectText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderCorrect = (): JSX.Element => {
    return (
      <View style={styles.containerCorrect}>
        <View style={styles.answerContainer}>
          <Text style={[styles.answerText, styles.answerHeading]}>
            Great job!
          </Text>
          <Text style={styles.answerText}>
            type 1 does, in fact, increase the risk of type 2 diabetes
          </Text>
          <Text style={styles.answerText}>
            According to the CDC, people who smoke cigarettes are 30%-40% more
            likely to develop type 2 diabetes than people who don't smoke
          </Text>
          <Text style={styles.answerText}>
            Read more{" "}
            <a
              href="https://www.cdc.gov/tobacco/campaign/tips/diseases/diabetes.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text style={{ textDecorationLine: "underline" }}>here</Text>.
            </a>
          </Text>
        </View>

        <TouchableOpacity>
          <View style={styles.correctBtn}>
            <Text style={styles.correctText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderResponse = (): JSX.Element => {
    let isCorrect: boolean;

    if (answer !== "type 1") isCorrect = false;
    else isCorrect = true;

    if (isCorrect) return renderCorrect();
    else return renderIncorrect();
  };

  const renderContainer = (): JSX.Element => {
    if (showResult) return renderResponse();
    else return renderInputs();
  };

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <CompletionIndicator colour="#27ae60" sheen="#2ecc71" progress={80} />
        {renderQuestion1()}
        {renderContainer()}
      </View>
    </View>
  );
};
export default Question2;
