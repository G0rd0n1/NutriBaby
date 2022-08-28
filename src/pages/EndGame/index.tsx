import { View, Text } from "react-native";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { styles } from "./styles";

const EndGame = (): JSX.Element => {
  const { width, height } = useWindowSize();

  return (
    <View style={styles.container}>
      <View style={styles.textBold}>
        <Text style={styles.text}>This is the EndGame page</Text>
        <Text style={styles.textSize}>You have won a voucher...</Text>

      </View>
      <Confetti width={width} height={height} />
    </View>
  );
};
export default EndGame;
