import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import colors from "./src/colors";
import { NavigatorComponent } from "./src/Navigation/Navigation";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={s.MainViewApp}>
          <NavigatorComponent />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  MainViewApp: {
    flex: 1,
    backgroundColor: colors.branco,
  },
});

export default App;
