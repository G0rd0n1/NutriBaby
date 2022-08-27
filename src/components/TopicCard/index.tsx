import { View, Text } from "react-native";
import { styles } from "./styles";

interface Props {
  colour: string;
  text: string;
}

const TopicCard: React.FC<Props> = ({ colour, text }): JSX.Element => {
  return (
    <View style={[styles.topic, { backgroundColor: colour }]}>
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
