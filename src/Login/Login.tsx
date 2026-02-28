import {
  Image,
  StyleSheet,
  Text,
  View,
  Switch,
  ImageBackground,
} from 'react-native';
import colors from '../colors';
import { LoginInputNumeric } from '../components/Input/LoginInputNumeric';
import { LoginInputText } from '../components/Input/LoginInputText';
import { ButtonCustom } from '../components/Button/ButtonCustom';
import { useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Login = ({navigation}: any) => {
  const [isDarkMode, setisDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setisDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <ImageBackground
        source={require('../images/wallpaper3.png')}
        style={{ height: '100%' }}
        resizeMode="stretch"
        alt="wallpaper"
      >
        <View
          style={[s.mainView, isDarkMode && { backgroundColor: 'transparent' }]}
        >
          <View style={s.mainContainer}>
            <View style={s.logoView}>
              <Image
                source={require('../images/logo.png')}
                style={s.logo}
                resizeMode="contain"
              />
              <Text style={s.logoText}>RIVO.</Text>
            </View>

            <LoginInputNumeric
              label={'CNPJ'}
              placeholder={'Digite o CNPJ...'}
            />
            <LoginInputText
              label={'USUÁRIO'}
              placeholder={'Digite o usuário...'}
            />
            <LoginInputText
              label={'SENHA'}
              hideview={true}
              placeholder={'Digite a senha...'}
            />

            <Switch value={isDarkMode} onChange={toggleDarkMode} />

            <ButtonCustom
              style={s.buttonAcessar}
              title="Acessar"
              onPress={() => {navigation.navigate('PaginaInicial')}}
            />

            {/* <ButtonCustom style={s.buttonAcessar} title='ToggleTheme' onPress={() => toggleDarkMode()} />  */}
          </View>
        </View>
      </ImageBackground>
    </ThemeContext.Provider>
  );
};

const s = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.prata,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
  },
  logoView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 15,
  },
  logoText: {
    fontSize: 42,
    fontFamily: 'times',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.azulEscuro,
  },
  mainContainer: {
    width: 300,

    backgroundColor: colors.branco,
    borderRadius: 30,
  },
  buttonAcessar: {
    marginTop: 20,
    marginBottom: 30,
  },
  logoViewDark: {
    backgroundColor: colors.branco,
    borderRadius: 15,
  },
});

export { Login };
