import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderDrawer } from "../components/HeaderDrawer";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import services from "../services/services";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  const navigation = useNavigation();

  const handleLogOut = () => {
    services.logout();
    navigation.navigate("Login");
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: Colors.red },
        headerRight: () => (
          <HeaderDrawer icon={"exit"} onPress={handleLogOut} />
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
