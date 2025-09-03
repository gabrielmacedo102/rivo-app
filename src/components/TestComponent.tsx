import {  Text, View } from "react-native"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { ButtonCustom } from "./Button/ButtonCustom"

const TestComponent = () => {

    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);


    return (

        <View style={{height: 300, backgroundColor: isDarkMode? "#1b181fff" : "#65699bff"}}>

            <Text>Componente teste!</Text>

            <ButtonCustom title="toggle" onPress={toggleDarkMode}/>

        </View>
    )
}



export { TestComponent };

