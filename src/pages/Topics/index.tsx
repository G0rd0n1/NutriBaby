import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useCookies } from "react-cookie";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { Topic } from "../../components";

const Topics = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [cookies, setCookie] = useCookies();

  useEffect((): void => {
    if (cookies.MODE !== null && cookies.MODE !== undefined) {
      window.location.replace("/play");
    }
    setCookie("OnBoarding", true, {
      path: "/",
      maxAge: 2628000, // lasts 1 month
    });
    // eslint-disable-next-line
  }, [cookies.MODE]);

  const setGameMode = (gameMode: string): void => {
    setCookie("MODE", gameMode, {
      path: "/",
      maxAge: 2628000,
    });
    setLoading(true);
    setTimeout(() => {
      window.location.replace("/play");
    }, 500);
  };

  const renderTopics = (): JSX.Element => {
    return (
      <View style={styles.topicsContainer}>
        <TouchableOpacity onPress={() => setGameMode("diabetes")}>
          <Topic colour="#2ecc71" text="Diabetes II" />
        </TouchableOpacity>
        <Topic colour="#FFC312" text="Asberger's" />
        <Topic colour="#FDA7DF" text="Hypertension" />
        <Topic colour="#74b9ff" text="Stress" />
      </View>
    );
  };

  const renderLoading = (): JSX.Element => {
    return (
      <ActivityIndicator size="large" color="#000" style={styles.loading} />
    );
  };

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
        {loading ? renderLoading() : renderTopics()}
      </View>
    </View>
  );
};
export default Topics;
