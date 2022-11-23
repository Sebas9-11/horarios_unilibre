import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import { SnackAlert } from "../../components/SnackAlert";
import { Colors } from "../../constants/Colors";
import Buttons from "../../components/buttons/Buttons";
import DialogCard from "../../components/DialogCard";
import { useNavigation } from "@react-navigation/native";
import services from "../../services/services";

export default function ClassHours({ route }) {
  const [viseble, setVisible] = React.useState(false);
  const [dialogOn, setDialogOn] = React.useState(false);
  const onDismissSnackBar = () => setVisible(false);
  const init = route.params.init;
  const end = route.params.end;
  const [tema, setTema] = React.useState("");
  const [hora, setHora] = React.useState("");
  const [fecha, setFecha] = React.useState("");
  const navigation = useNavigation();
  const id = services.user.id;
  const name = services.user.name;

  function Titles({ label, title }) {
    return (
      <Text style={styles.name}>
        <Text style={styles.subName}>{label}:</Text> {title}
      </Text>
    );
  }

  const date = new Date();
  const dates =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const time = hour + ":" + minutes;

  const Classes = (entrada) => {
    const Hour = entrada.split(":")[0];
    const Minutes = entrada.split(":")[1];
    const afterHour = Hour - 1;
    const afterMinutes = parseInt(Minutes) + 45;
    const class15minLater = Hour + ":" + (parseInt(Minutes) + 15);
    const class15minBefore = Hour + ":" + (Minutes - 15);
    const class1HourBefore = afterHour + ":" + afterMinutes;
    if (Minutes === "00") {
      if (time >= class1HourBefore && time <= class15minLater) {
        setDialogOn(true);
      } else {
        setVisible(true);
      }
    } else {
      if (time >= class15minBefore && time <= class15minLater) {
        setDialogOn(true);
      } else {
        setVisible(true);
      }
    }
  };

  const handleClases = async () => {
    if (tema === "") {
      Alert.alert("Error", "El campo tema no puede estar vacio");
    } else {
      setHora(time);
      setFecha(dates);
      const resp = await services.clases(id, name, tema, hora, fecha);
      if (resp === 200) {
        Alert.alert("Clase", "Clase registrada correctamente");
        navigation.goBack();
      } else {
        Alert.alert("Error", "Error al registrar la clase");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Titles label="Materia" title={route.params.name} />
      <Titles label="Curso" title={route.params.room} />
      <Titles label="Inico" title={init} />
      <Titles label="Fin" title={end} />
      <View style={styles.buttons}>
        <Buttons
          label="Iniciar clase"
          styles={styles.button}
          labelStyle={styles.label}
          onPress={() => Classes(init)}
        />
        <Buttons
          label="Finalizar clase"
          styles={styles.button}
          labelStyle={styles.label}
          onPress={() => Classes(end)}
        />
      </View>
      <SnackAlert
        visible={viseble}
        onDismiss={onDismissSnackBar}
        label="Clase iniciada"
        message={`Aun no es hora de la clase `}
      />
      <DialogCard
        visible={dialogOn}
        value={tema}
        onChangeText={(text) => setTema(text)}
        onPress={handleClases}
        onDismiss={() => setDialogOn(false)}
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
    margin: 12,
    backgroundColor: Colors.red,
  },
  label: {
    color: "white",
  },
});
