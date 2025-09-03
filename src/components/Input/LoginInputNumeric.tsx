import { StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../../colors';


const LoginInputNumeric = ({ label, placeholder }: any) => {


  return (
    <View style={s.MainView}>
      <Text style={s.labelText}>{label}</Text>
      <View style={s.InputView}>
        <TextInput
     
          placeholder={placeholder}
          style={s.input}
          keyboardType="numeric"
   
          
        />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  MainView: {
    marginHorizontal: 10,

    marginTop: 20,
  },
  InputView: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.azulEscuro,
  },
  labelText: {
    color: colors.azulEscuro,
    fontWeight: 'bold',
  },
  input: {
    color: colors.preto,
    fontSize: 16
  }
});

export { LoginInputNumeric };
