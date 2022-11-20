import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function Buttons({ label, styles, onPress, labelStyle }) {
  return (
    <Button
      mode="elevated"
      onPress={onPress}
      style={styles}
      labelStyle={labelStyle}
    >
      {label}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    margin: 12,
    backgroundColor: "blue",
  },
  label: {
    color: "white",
  },
});
