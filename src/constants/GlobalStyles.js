import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export default GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.red,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    color: Colors.black,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 15,
    marginBottom: 20,
    color: Colors.black,
    textAlign: "center",
  },
});
