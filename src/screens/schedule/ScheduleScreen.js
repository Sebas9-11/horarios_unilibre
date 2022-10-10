import { View, Text, StyleSheet } from "react-native";
import React from "react";
import List from "../../components/cards/List";

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
