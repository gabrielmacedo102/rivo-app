import { StyleSheet, Text, View } from "react-native"

const PaginaInicial = () => {
    return (
        <View style={s.MainView}>

            <Text>Página inicial</Text>


        </View>
    )
}

const s =  StyleSheet.create({

    MainView:
    {
        flex: 1
    }
})



export {PaginaInicial};