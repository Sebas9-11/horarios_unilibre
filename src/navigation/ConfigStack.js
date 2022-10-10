import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConfigScreen from "../screens/config/ConfigScreen";
import { HeaderDrawer } from "../components/HeaderDrawer";
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function ConfigStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: Colors.red },
        headerLeft: () => (
          <HeaderDrawer icon={"menu"} onPress={() => navigation.openDrawer()} />
        ),
      }}
    >
      <Stack.Screen
        name="Config"
        component={ConfigScreen}
        options={{
          headerTintColor: Colors.white,
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Stack.Navigator>
  );
}
