import { createDrawerNavigator } from "@react-navigation/drawer";
import ScheduleStack from "./ScheduleStack";
import ConfigStack from "./ConfigStack";
import HomeStack from "./HomeStack";
import { Text } from "react-native";

const draw = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <draw.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <draw.Screen
        name="MyHome"
        component={HomeStack}
        options={{
          title: "Home",
        }}
      />
      <draw.Screen
        name="MySchedule"
        component={ScheduleStack}
        options={{
          title: "schedule",
        }}
      />
      <draw.Screen
        name="MyConfig"
        component={ConfigStack}
        options={{
          title: "Config",
        }}
      />
    </draw.Navigator>
  );
}
