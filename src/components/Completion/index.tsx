import { View } from "react-native";
import { styles } from "./styles";

interface Props {
  colour: string;
  sheen: string;
  progress: number;
}

const Completion: React.FC<Props> = ({
  colour,
  sheen,
  progress,
}): JSX.Element => {
  return (
    <View style={styles.completionContainer}>
      <View
        style={[
          styles.completionProgress,
          { width: progress + "%", backgroundColor: colour },
        ]}
      >
        <View
          style={[
            styles.completionProgressShine,
            { width: "90%", backgroundColor: sheen },
          ]}
        />
      </View>
    </View>
  );
};
export default Completion;
