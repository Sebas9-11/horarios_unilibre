import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import Card from "../cards/Card";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/Colors";
import services from "../../services/services";

export default function List(props) {
  const navigation = useNavigation();
  const data = services.user.horario;

  function DayWeek({ day }) {
    return (
      <View style={styles.dayContainer}>
        <Text style={styles.day}>{day}</Text>
      </View>
    );
  }

  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          item.clases.length !== 0 ? (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", item)}
            >
              <Card styles={styles.card}>
                <DayWeek day={item.day} />
                <View style={styles.detailsContainer}>
                  <Text style={styles.title}>Clases: {item.clases.length}</Text>
                  <Text style={styles.subtitle}>ver mas</Text>
                </View>
              </Card>
            </TouchableOpacity>
          ) : null
        }
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
  detailsContainer: {
    textAlign: "center",
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: Platform.OS === "ios" ? 20 : 12,
  },
  subtitle: {
    fontSize: Platform.OS === "ios" ? 15 : 10,
    color: Colors.gray,
  },
  dayContainer: {
    height: "100%",
    width: "30%",
    backgroundColor: Colors.red,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    marginRight: 10,
    justifyContent: "center",
  },
  day: {
    color: "white",
    textAlign: "center",
    fontSize: Platform.OS === "ios" ? 18 : 12,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
  },
});
