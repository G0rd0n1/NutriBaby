import { View, Text } from "react-native";
import { Link } from "react-router-dom";
import { styles } from "./styles";

const Landing = (): JSX.Element => {
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
          The free, fun, and effective way to learn about food and nutrition!
        </Text>
        <View style={styles.buttonContainer}>
          <Link to="/welcome">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Get started</Text>
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
};
export default Landing;
