/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { StyleSheet, View } from 'react-native';
import {
  SafeAreaProvider,
  
} from 'react-native-safe-area-context';
import colors from "./src/colors"
import { Login } from './src/Login/Login';




function App() {
  

  return (
    <SafeAreaProvider>
      <View style={s.MainViewApp}>

      <Login />
    
        
      </View>
      
    </SafeAreaProvider>
  );
}



const s = StyleSheet.create({
  MainViewApp: {
    flex: 1,
    backgroundColor: colors.branco
  }
})


export default App;
