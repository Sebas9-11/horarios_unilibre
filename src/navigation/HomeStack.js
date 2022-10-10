import HomeScreen from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderDrawer } from "../components/HeaderDrawer";
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
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
        name="Home"
        component={HomeScreen}
        options={{
          headerTintColor: Colors.white,
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Stack.Navigator>
  );
}
