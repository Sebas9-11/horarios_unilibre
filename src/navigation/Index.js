import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./MyDrawer";
import AuthStack from "./AuthStack";

export default function Index() {
  return (
    <NavigationContainer>
      {/* <MyDrawer /> */}
      <AuthStack />
    </NavigationContainer>
  );
}
