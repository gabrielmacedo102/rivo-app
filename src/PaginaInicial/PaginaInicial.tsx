import { FlatList, StyleSheet, Text, View } from 'react-native';
import colors from '../colors';

interface OptionProps{
  id: Number,
  description: string
}


const PaginaInicial = () => {

  const opcoes = [{id: 1, description: "Relatórios"},{id: 2, description: "Vendas"},{id: 3, description: "Gráficos"},{id: 4, description: "Pedidos"},{id: 5, description: "Mesas"}]


  const handleRenderOptions = (item: OptionProps) => {

    return (

      <View style={s.OptionSquare}>
          <Text style={s.TextOption}>
            {item.description}
          </Text>
      </View>
    )
  }


  return (
    <View style={s.MainView}>
      <View style={s.MenuView}>

        

      </View>
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
        <FlatList 
        style={s.optionsFlatlist}
        data={opcoes}
        renderItem={({ item }) => handleRenderOptions(item)}
        horizontal
        
        keyExtractor={item => item.id.toString()}/>
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
  },
  OptionSquare: {
    width: 70,
    height: 70,
    borderRadius: 10,
    borderColor: colors.azulClaro,
    borderWidth: 1,
    marginHorizontal: 8,
    marginVertical: 10
  },
  optionsFlatlist: {
  
  },
  TextOption: {
    textAlign: "center",
    color: colors.azulClaro
  },
  MenuView: {
    width: "40%",
    height: "100%",
    position: "absolute",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    right: 0
  }
});

export { PaginaInicial };
