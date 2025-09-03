import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../Login/Login";
import { PaginaInicial } from "../PaginaInicial/PaginaInicial";

const Stack = createNativeStackNavigator();

const NavigatorComponent = () => {
  return (
  
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "#FDFDFD" } }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaginaInicial"
          component={PaginaInicial}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

  );
};

export { NavigatorComponent };
