import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";

export default function Buttons({ label, styles, onPress, disabled }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles, styles.button]}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.red,
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "50%",
    borderWidth: 1,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
