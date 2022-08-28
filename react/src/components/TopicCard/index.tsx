import { View, Text } from "react-native";
import { styles } from "./styles";

interface Props {
  colour: string;
  borderColour?: string;
  text: string;
}

const TopicCard: React.FC<Props> = ({
  colour,
  text,
  borderColour,
}): JSX.Element => {
  return (
    <View
      style={[
        styles.topic,
        { backgroundColor: colour, borderColor: borderColour, borderWidth: 5 },
      ]}
    >
      <Text
        allowFontScaling={false}
        selectable={false}
        style={styles.topicText}
      >
        {text}
      </Text>
    </View>
  );
};
export default TopicCard;
