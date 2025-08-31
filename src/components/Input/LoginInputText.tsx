import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import colors from "../../colors";
import { useState } from "react";


const LoginInputText = ({label, hideview = false}: any) => {
    
    const hideeye = require("../../images/hide.png");
    const showeye = require("../../images/view.png");

    const [show, setshow] = useState(hideview)
    setshow
    
    return (
        <View style={s.MainView}>
            
            <Text style={s.labelText}>{label}</Text>
            <View style={s.InputView}>
            <TextInput placeholder="Digite..." style={s.input} autoCapitalize="none" secureTextEntry={show}/>
            {hideview &&
            <TouchableOpacity style={s.touch} onPress={() => setshow((prev: any) => !prev)}>
            <Image 
            resizeMode="contain"
            source={show ? hideeye : showeye}
            style={s.eye}
            />
            </TouchableOpacity>
            }
            </View>
        </View>
    )
}


const s = StyleSheet.create({
    MainView: {
        marginHorizontal: 10,
        
        marginTop: 20
    },
    InputView: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.azulEscuro,
        flexDirection: "row"
    },
    labelText: {
        color: colors.azulEscuro,
        fontWeight: "bold"
    },
    input: {
        color: colors.preto,
        flex:1,
        
    },
    eye: {
        width: 25,
        height: 25,
        opacity: 0.5,
        marginRight: 3
    },
    touch: {
        alignSelf: "center"
    }
    
})

export {LoginInputText} ;