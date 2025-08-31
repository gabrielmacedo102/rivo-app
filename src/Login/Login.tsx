import {  Image, StyleSheet, Text, View } from 'react-native';
import colors from '../colors';
import { LoginInputNumeric } from '../components/Input/LoginInputNumeric';
import { LoginInputText } from '../components/Input/LoginInputText';
import { ButtonCustom } from '../components/Button/ButtonCustom';



const Login = () => {
  return (
    <View style={s.mainView}>
        <View style={s.mainContainer}>
      <View style={s.logoView}>
      <Image 
        source={require('../images/logo.png')} 
        style={s.logo}
        resizeMode="contain"
      />
      <Text style={s.logoText}>RIVO</Text>
    </View>

    <LoginInputNumeric label={"CNPJ"} />
    <LoginInputText label={"USUÁRIO"}  />
    <LoginInputText label={"SENHA"} hideview={true} /> 


    <ButtonCustom style={s.buttonAcessar} title='Acessar' onPress={() => {console.log('Clicou!!')}} />
    </View>
    </View>
  );
};

const s = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.prata,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 70, 
    height: 70,
    
    
  },
  logoView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15
  },
  logoText: {
    fontSize: 42,
    fontFamily: "times",
    fontWeight: "bold",
    alignSelf: "center",
    color: colors.azulEscuro

  },
  mainContainer: {
    width: 300,
    
    backgroundColor: colors.branco,
    borderRadius: 30
    
  },
  buttonAcessar: {
    marginTop: 20,
    marginBottom: 30
  }
});

export { Login };
