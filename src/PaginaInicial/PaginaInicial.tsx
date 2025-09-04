import { StyleSheet, Text, View } from 'react-native';
import colors from '../colors';

const PaginaInicial = () => {
  return (
    <View style={s.MainView}>
      <View style={s.HeaderView}>
        <Text style={s.TextTitulo}>Bem vindo, Gabriel!</Text>
        <View style={s.roleView}>
            <Text style={s.TextRole}>Administrador</Text>
        </View>
        <View style={s.UserImage}>
            <></>
        </View>
      </View>
      <View style={s.BodyView}>
        <Text>Body</Text>
      </View>
      <View style={s.FootterView}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  MainView: {
    flex: 1,
  },
  HeaderView: {
    height: 80,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  BodyView: {
    flex: 1,
  },
  FootterView: {
    height: 60,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: colors.gray200
  },
  UserImage: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: colors.gray200,
    borderWidth: 1,
    borderColor: colors.gray300
    
    
  },
  TextTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    height: "100%",
    width: "40%",
    
    textAlignVertical: "center"
    
  },
  roleView:
  {
    backgroundColor: colors.erro,
    padding: 5,
    borderRadius: 6
  },
  TextRole: {
    color: "white"
  }
});

export { PaginaInicial };
