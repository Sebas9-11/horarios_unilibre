import React from "react";
import services from "../../services/services";
import { Colors } from "../../constants/Colors";
import DialogCard from "../../components/DialogCard";
import Buttons from "../../components/buttons/Buttons";
import { useNavigation } from "@react-navigation/native";
import { SnackAlert } from "../../components/SnackAlert";
import { View, Text, StyleSheet, Alert } from "react-native";

export default function ClassHours({ route }) {
  const [viseble, setVisible] = React.useState(false);
  const [dialogOn, setDialogOn] = React.useState(false);
  const [tema, setTema] = React.useState("");
  const [hora, setHora] = React.useState("");
  const [fecha, setFecha] = React.useState("");
  const navigation = useNavigation();
  const id = services.user.id;
  const name = services.user.name;
  const init = route.params.init;
  const end = route.params.end;

  const date = new Date();
  const dates =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const time = hour + ":" + minutes;

  React.useEffect(() => {
    setHora(time);
    setFecha(dates);
  }, []);

  const onDismissSnackBar = () => setVisible(false);

  const initClass = () => {
    services.horaDeclase(init, time) ? setDialogOn(true) : setVisible(true);
  };

  const endClass = () => {
    services.horaDeclase(end, time) ? setDialogOn(true) : setVisible(true);
  };

  const handleClases = async () => {
    if (tema === "") {
      Alert.alert("Error", "El campo tema no puede estar vacio");
    } else {
      const resp = await services.clases("", id, name, tema, hora, fecha);
      if (resp === "Clase creada") {
        Alert.alert("Clase", "Clase registrada correctamente");
        navigation.goBack();
      } else {
        Alert.alert("Error", "Error al registrar la clase");
      }
    }
  };

  function Titles({ label, title }) {
    return (
      <Text style={styles.name}>
        <Text style={styles.subName}>{label}:</Text> {title}
      </Text>
    );
  }

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
          onPress={initClass}
        />
        <Buttons
          label="Finalizar clase"
          styles={styles.button}
          labelStyle={styles.label}
          onPress={endClass}
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
