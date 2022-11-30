import React from "react";
import { View, Text, StyleSheet, Image, BackHandler } from "react-native";
import globalStyles from "../constants/GlobalStyles";
import escudo from "../../assets/escudo.png";
import services from "../services/services";

export default function HomeScreen() {
  const user = services.user.name;

  React.useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  });

  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>Bienvenido</Text>
      <Text style={globalStyles.title}>{user}</Text>
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
