import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ScheduleStack from "./ScheduleStack";
import HomeStack from "./HomeStack";

const tab = createBottomTabNavigator();

export default function MyTab() {
  return (
    <tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <tab.Screen
        name="MyHome"
        component={HomeStack}
        options={{
          title: "Home",
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={focused ? "red" : "black"}
            />
          ),
          tabBarLabelStyle: {
            color: "black",
          },
        }}
      />
      <tab.Screen
        name="MySchedule"
        component={ScheduleStack}
        options={{
          title: "Schedule",
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={focused ? "today" : "today-outline"}
              size={size}
              color={focused ? "red" : "black"}
            />
          ),
          tabBarLabelStyle: {
            color: "black",
          },
        }}
      />
    </tab.Navigator>
  );
}
