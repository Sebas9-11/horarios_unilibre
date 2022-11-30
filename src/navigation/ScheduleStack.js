import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScheduleScreen from "../screens/schedule/ScheduleScreen";
import DetailsScreen from "../screens/schedule/DetailsScreen";
import ClassHours from "../screens/schedule/ClassHours";
import { HeaderDrawer } from "../components/HeaderDrawer";
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Stack = createNativeStackNavigator();

export default function ScheduleStack() {
  const navigation = useNavigation();

  function Back({ onPress }) {
    return <HeaderDrawer icon={"arrow-back"} onPress={onPress} />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: Colors.red },
        headerTintColor: Colors.white,
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerLeft: () => (
            <Back onPress={() => navigation.navigate("Schedule")} />
          ),
        }}
      />
      <Stack.Screen
        name="ClassHours"
        component={ClassHours}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}
