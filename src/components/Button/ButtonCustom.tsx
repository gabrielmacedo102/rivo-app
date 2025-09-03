import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../colors';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';


interface ButtonProps {
    title?: string;
    onPress?: () => void;
    style?: any;
}

const ButtonCustom = ({title, onPress = () => {}, style}: ButtonProps) => {

  const {isDarkMode} = useContext(ThemeContext)

  return (
    <View>
      <TouchableOpacity onPress={() => onPress()} style={[s.buttonMain, isDarkMode && s.buttonDark, style]}>
        <Text style={s.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  buttonMain: {
    marginHorizontal: 10,
    backgroundColor: colors.azulClaro,
    padding: 8,
    borderRadius: 10
    
  },
  buttonText: {
    color: colors.branco,
    textAlign: "center",
    fontSize: 16
  },
  buttonDark: {
    backgroundColor: colors.azulEscuro
  }
})

export { ButtonCustom };
