import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScheduleScreen from "../screens/schedule/ScheduleScreen";
import DetailsScreen from "../screens/schedule/DetailsScreen";
import Attendance from "../screens/schedule/Attendance";
import ClassHours from "../screens/schedule/ClassHours";
import { HeaderDrawer } from "../components/HeaderDrawer";
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Stack = createNativeStackNavigator();

export default function ScheduleStack({ route }) {
  const navigation = useNavigation();

  function OpenDraw() {
    return (
      <HeaderDrawer icon={"menu"} onPress={() => navigation.openDrawer()} />
    );
  }

  function Back({ onPress }) {
    return <HeaderDrawer icon={"arrow-back"} onPress={onPress} />;
  }

  const [modal, setModal] = React.useState(false);
  const closeModal = () => setModal(false);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: Colors.red },
      }}
    >
      <Stack.Group
        screenOptions={{
          headerTintColor: Colors.white,
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => (
            <HeaderDrawer icon={"home"} onPress={() => navigation.goBack()} />
          ),
        }}
      >
        <Stack.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{ headerLeft: () => <OpenDraw /> }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerLeft: () => (
              <Back onPress={() => navigation.navigate("Schedule")} />
            ),
          }}
        />
      </Stack.Group>
      <Stack.Screen
        name="ClassHours"
        component={ClassHours}
        options={{
          headerTintColor: Colors.white,
          headerTitleStyle: { fontWeight: "bold" },
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}
