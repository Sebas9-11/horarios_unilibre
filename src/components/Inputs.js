import { TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";

export default function Inputs({ onChangeText, value, label, type, securety }) {
  return (
    <TextInput
      style={styles.input}
      label={label}
      onChangeText={onChangeText}
      value={value}
      keyboardType={type}
      secureTextEntry={securety}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    margin: 12,
  },
});
