import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import Card from "../../components/cards/Card";
import { useNavigation } from "@react-navigation/native";

export default function DetailsScreen({ route }) {
  const navigation = useNavigation();

  const clases = route.params.clases;

  return (
    <View style={styles.list}>
      <FlatList
        data={clases}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ClassHours", item)}
          >
            <Card styles={styles.card}>
              <Text style={styles.items}>Materia: {item.name}</Text>
              <Text style={styles.items}>Salon: {item.room}</Text>
              <Text style={styles.items}>Hora: {item.init}</Text>
            </Card>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 6,
  },
  items: {
    fontSize: Platform.OS === "ios" ? 20 : 12,
    fontWeight: "bold",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
  },
});
