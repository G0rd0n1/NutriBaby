import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { View, Text } from "react-native";
import { styles } from "./styles";

const Play = (): JSX.Element => {
  const [cookie] = useCookies(["MODE"]);

  useEffect((): void => {
    if (cookie.MODE === null || cookie.MODE === undefined) {
      window.location.replace("/welcome");
    }
  }, [cookie.MODE]);

  return (
    <View style={styles.container}>
      <Text>This is the Play page</Text>
    </View>
  );
};
export default Play;
