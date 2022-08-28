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
          Which fats are considered as unhealthy?
          
        </Text>
        <View style={styles.topicsContainer}>
          <TouchableOpacity
            onPress={() => setAnswer(" monounsaturated fats")}
            style={
              answer === " monounsaturated fats"
                ? { borderColor: "#aaa", borderRadius: 20, borderWidth: 5 }
                : null
            }
          >
            <Topic colour="#fff" text=" monounsaturated fats" />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              answer === " saturated fats"
                ? { borderColor: "#aaa", borderRadius: 20, borderWidth: 5 }
                : null
            }
            onPress={() => setAnswer(" saturated fats")}
          >
            <Topic colour="#fff" text=" saturated fats" />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              answer === " polyunsaturated fats"
                ? { borderColor: "#aaa", borderRadius: 20, borderWidth: 5 }
                : null
            }
            onPress={() => setAnswer(" polyunsaturated fats")}
          >
            <Topic colour="#fff" text=" polyunsaturated fats" />
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
             saturated fats increases the risk of  monounsaturated fats diabetes
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
          There are two types of fat that should be eaten sparingly: saturated and trans fatty acids. 
          </Text>
          <Text style={styles.answerText}>
          Both can raise cholesterol levels, clog arteries, and increase the risk for heart disease.          
          </Text>
          <Text style={styles.answerText}>
            Read more{" "}
            <a
              href="https://www.webmd.com/diet/obesity/features/skinny-fat-good-fats-bad-fats#:~:text=The%20'Bad'%20Fats%20in%20Your%20Diet&text=There%20are%20two%20types%20of,the%20risk%20for%20heart%20disease."
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

  const setGameMode = ():void => {
      setTimeout(() => {
      window.location.replace("/play/done");
    }, 500);
  }
  const renderResponse = (): JSX.Element => {
    let isCorrect: boolean;

    if (answer !== " saturated fats") isCorrect = false;
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
        <CompletionIndicator colour="#27ae60" sheen="#2ecc71" progress={100} />
        {renderQuestion1()}
        {renderContainer()}
      </View>
    </View>
  );
};
export default Question2;
