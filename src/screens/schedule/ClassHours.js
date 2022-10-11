import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SnackAlert } from "../../components/SnackAlert";
import { Colors } from "../../constants/Colors";
import Buttons from "../../components/buttons/Buttons";

export default function ClassHours({ route }) {
  const navigation = useNavigation();
  const [viseble, setVisible] = React.useState(false);
  const onDismissSnackBar = () => setVisible(false);

  function Titles({ label, title }) {
    return (
      <Text style={styles.name}>
        <Text style={styles.subName}>{label}:</Text> {title}
      </Text>
    );
  }
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const time = hour + ":" + minutes;

  const hours = () => {
    time;
    Alert.alert("Time", time);
    setVisible(true);
  };

  const assitence = () => {
    const init = route.params.init;
    const initHour = init.split(":")[0];
    const initMinutes = init.split(":")[1];
    const initClass = initHour + ":" + initMinutes;
    const initClass15minLater = initHour + ":" + (initMinutes - -15);
    const initClass15minBefore = initHour + ":" + (initMinutes - 15);
    if (time >= initClass15minBefore && time <= initClass15minLater) {
      return (
        <TouchableOpacity style={styles.button}>
          <Text>Marcar Ingreso</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={styles.buttonDisabled}>
          <Text>Marcar Ingreso</Text>
        </TouchableOpacity>
      );
    }
  };

  const Enable = () => {
    return (
      <View>
        <TouchableOpacity style={styles.button}>
          <Text>on</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Disable = () => {
    return (
      <View>
        <TouchableOpacity style={styles.buttonDisabled}>
          <Text>of</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Titles label="Materia" title={route.params.name} />
      <Titles label="Curso" title={route.params.room} />
      <Titles label="Inico" title={route.params.init} />
      <View style={styles.buttons}>
        {assitence === true ? <Disable /> : <Enable />}
      </View>
      <SnackAlert
        visible={viseble}
        onDismiss={onDismissSnackBar}
        message={"Entrada registrada"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  name: {
    fontSize: 20,
    fontWeight: "normal",
  },
  subName: {
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "90%",
  },
  button: {
    backgroundColor: Colors.red,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonDisabled: {
    backgroundColor: Colors.gray,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 10,
  },
  textButton: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
  },
});
