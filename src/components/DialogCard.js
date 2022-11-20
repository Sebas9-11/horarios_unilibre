import { StyleSheet } from "react-native";
import React from "react";
import Inputs from "./Inputs";
import Buttons from "./buttons/Buttons";
import { Dialog } from "react-native-paper";

export default function DialogCard({
  visible,
  onChangeText,
  onPress,
  onDismiss,
  value,
}) {
  return (
    <Dialog style={styles.dialog} visible={visible} onDismiss={onDismiss}>
      <Dialog.Title>Tema del dia</Dialog.Title>
      <Dialog.Content>
        <Inputs
          label="Tema"
          onChangeText={onChangeText}
          type="default"
          value={value}
        />
      </Dialog.Content>
      <Dialog.Actions>
        <Buttons
          label="Enviar"
          styles={styles.button}
          labelStyle={styles.label}
          onPress={onPress}
        />
      </Dialog.Actions>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  dialog: {
    alignItems: "center",
    justifyContent: "center",
  },
});
