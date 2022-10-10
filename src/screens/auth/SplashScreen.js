import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import logo from "../../../assets/logo.png";
import { Colors } from "../../constants/Colors";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.red,
  },
  logo: {
    width: "90%",
    height: 300,
    alignSelf: "center",
    resizeMode: "contain",
  },
});
