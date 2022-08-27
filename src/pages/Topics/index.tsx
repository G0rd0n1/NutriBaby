import { View, Text } from "react-native";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { styles } from "./styles";
import { useEffect } from "react";

const Topics = (): JSX.Element => {
  const [, setCookie] = useCookies();

  useEffect((): void => {
    setCookie("OnBoarding", true, {
      path: "/",
      maxAge: 2628000, // lasts 1 month
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text allowFontScaling={false} selectable={false} style={styles.logo}>
          NutriLearn
        </Text>
        <Text
          allowFontScaling={false}
          selectable={false}
          style={styles.description}
        >
          I want to learn about...
        </Text>
        <View style={styles.topicsContainer}>
          <Link to="/play">
            <View style={[styles.topic, { backgroundColor: "#2ecc71" }]}>
              <Text
                allowFontScaling={false}
                selectable={false}
                style={styles.topicText}
              >
                Diabetes II
              </Text>
            </View>
          </Link>
          <View style={[styles.topic, { backgroundColor: "#FFC312" }]}>
            <Text
              allowFontScaling={false}
              selectable={false}
              style={styles.topicText}
            >
              Asberger's
            </Text>
          </View>
          <View style={[styles.topic, { backgroundColor: "#FDA7DF" }]}>
            <Text
              allowFontScaling={false}
              selectable={false}
              style={styles.topicText}
            >
              Hypertension
            </Text>
          </View>
          <View style={[styles.topic, { backgroundColor: "#74b9ff" }]}>
            <Text
              allowFontScaling={false}
              selectable={false}
              style={styles.topicText}
            >
              Stress
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Topics;
