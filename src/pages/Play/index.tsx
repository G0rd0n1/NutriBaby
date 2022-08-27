import { View, Text } from "react-native";
import { styles } from "./styles";
import { useEffect } from "react";
import { CompletionIndicator, Topic } from "../../components";
import { useCookies } from "react-cookie";

const Play = (): JSX.Element => {
  const [cookies] = useCookies(["MODE"]);

  useEffect((): void => {
    if (cookies.MODE === null || cookies.MODE === undefined) {
      window.location.replace("/");
    }
  }, []);

  const renderTopics = (): JSX.Element => {
    return (
      <View style={styles.topicsContainer}>
        <Topic colour="#fff" text="Crying" />
        <Topic colour="#fff" text="Smoking" />
        <Topic colour="#fff" text="Dancing" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <CompletionIndicator colour="#27ae60" sheen="#2ecc71" progress={80} />

        <Text
          allowFontScaling={false}
          selectable={false}
          style={styles.description}
        >
          ... increases risk of diabetes.
        </Text>
        {renderTopics()}
        <View style={styles.check}>
          <Text style={styles.checkText}>Check</Text>
        </View>
      </View>
    </View>
  );
};
export default Play;
