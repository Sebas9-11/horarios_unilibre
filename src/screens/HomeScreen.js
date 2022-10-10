import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import globalStyles from "../constants/GlobalStyles";
import escudo from "../../assets/escudo.png";

export default function HomeScreen({ user }) {
  user = "Sebastian Barrios";
  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>{user}</Text>
      <Text style={globalStyles.subTitle}>Bienvenido Nuevamente</Text>
      <Image source={escudo} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    width: "90%",
    height: 200,
    borderRadius: 20,
    marginTop: 20,
  },
});
