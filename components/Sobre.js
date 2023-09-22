import React from "react";
import {StyleSheet ,View, Text} from 'react-native'
import ButtonPersonalizado from "./ButtonPersonalizado";

const Sobre = ({route, navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.paragrafo}>Criado por Bergson</Text>
      <Text style={styles.paragrafo}>Tarefa 2 de Projeto de Interfaces para Dispositivos Móveis</Text>
      <Text style={styles.paragrafo}>E aqui acabou minha criatividade</Text>
      <Text style={styles.paragrafo}>Aperte no botão abaixo para ir para a Home</Text>
      <ButtonPersonalizado title="Home"
      onPress={() =>
          navigation.navigate('Home')
        }/>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    backgroundColor: '#0fe',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  paragrafo: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  }
});

export default Sobre