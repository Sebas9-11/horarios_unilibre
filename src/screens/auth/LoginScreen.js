import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import logo from "../../../assets/logo.png";
import Inputs from "../../components/Inputs";
import { Checkbox } from "react-native-paper";
import services from "../../services/services";
import Buttons from "../../components/buttons/Buttons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [id, setId] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [checked, setCheked] = React.useState(false);

  const handleLogin = async () => {
    const resp = await services.login(id, pass);
    try {
      if (resp) {
        navigation.navigate("MyTab");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (err) {
      alert(console.error(err));
    }
  };

  const handleCheck = async () => {
    setCheked(!checked);
    if (checked) {
      await AsyncStorage.removeItem("id");
      await AsyncStorage.removeItem("pass");
    } else {
      await AsyncStorage.setItem("id", id);
      await AsyncStorage.setItem("pass", pass);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.title}>Login</Text>
          <Inputs
            label="C.C."
            type={"numeric"}
            value={id}
            onChangeText={(text) => setId(text)}
          />
          <Inputs
            label="Password"
            type={"numeric"}
            value={pass}
            securety={true}
            onChangeText={(text) => setPass(text)}
          />
          <Checkbox.Item
            label="Recordar Campos"
            status={checked ? "checked" : "unchecked"}
            onPress={handleCheck}
          />
          <Buttons
            label="Ingresar"
            styles={styles.button}
            labelStyle={styles.label}
            onPress={handleLogin}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    width: 300,
    height: 50,
    margin: 12,
    backgroundColor: "red",
    justifyContent: "center",
    alignContent: "center",
  },
  label: {
    fontSize: 20,
    color: "white",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
