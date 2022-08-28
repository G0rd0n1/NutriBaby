import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { CompletionIndicator, Topic } from "../../components";
import { useCookies } from "react-cookie";

const Play = (): JSX.Element => {
  const [cookies] = useCookies(["MODE"]);
  const [showResult, setShowResult] = useState<any>(null);
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect((): void => {
    if (cookies.MODE === null || cookies.MODE === undefined) {
      window.location.replace("/");
    }
  }, [cookies.MODE]);

  const rendern1 = (): JSX.Element => {
    return (
      <View>
        <Text
          allowFontScaling={false}
          selectable={false}
          style={styles.description}
        >
            What is also known as ascorbic acid?
        </Text>
        <View style={styles.topicsContainer}>
          <TouchableOpacity
            onPress={() => setAnswer("Vitamin B+")}
            style={
              answer === "Vitamin B+"
                ? { borderColor: "#aaa", borderRadius: 20, borderWidth: 5 }
                : null
            }
          >
            <Topic colour="#fff" text="Vitamin B+" />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              answer === "Vitamin C"
                ? { borderColor: "#aaa", borderRadius: 20, borderWidth: 5 }
                : null
            }
            onPress={() => setAnswer("Vitamin C")}
          >
            <Topic colour="#fff" text="Vitamin C" />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              answer === "Vitamin A"
                ? { borderColor: "#aaa", borderRadius: 20, borderWidth: 5 }
                : null
            }
            onPress={() => setAnswer("Vitamin A")}
          >
            <Topic colour="#fff" text="Vitamin A" />
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
            Vitamin C increases the risk of type 2 diabetes
          </Text>
         
        </View>

        <TouchableOpacity onPress={() => alert("Next n")}>
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
          Vitamin C, also known as ascorbic acid, is necessary for the growth, development and repair of all body tissues
          </Text>
          
          <Text style={styles.answerText}>
            Read more{" "}
            <a
              href="https://www.webmd.com/diet/features/the-benefits-of-vitamin-c#:~:text=Vitamin%20C%2C%20also%20known%20as,cartilage%2C%20bones%2C%20and%20teeth."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text style={{ textDecorationLine: "underline" }}>here</Text>.
            </a>
          </Text>
        </View>

        <TouchableOpacity onPress={setGameMode}>
          <View style={styles.correctBtn}>
            <Text style={styles.correctText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderResponse = (): JSX.Element => {
    let isCorrect: boolean;

    if (answer !== "Vitamin C") isCorrect = false;
    else isCorrect = true;

    if (isCorrect) return renderCorrect();
    else return renderIncorrect();
  };

  const renderContainer = (): JSX.Element => {
    if (showResult) return renderResponse();
    else return renderInputs();
  };

  const renderLoading = (): JSX.Element => {
    return (
      <ActivityIndicator size="large" color="#000" style={styles.loading} />
    );
  };

  const setGameMode = (): void => {
    setLoading(true);
    setTimeout(() => {
      window.location.replace("/play/question/2");
    }, 500);
  };

  const renderContent = (): JSX.Element => {
    return (
      <View>
        <CompletionIndicator colour="#27ae60" sheen="#2ecc71" progress={0} />
        {rendern1()}
        {renderContainer()}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        {loading ? renderLoading() : renderContent()}
      </View>
    </View>
  );
};
export default Play;
