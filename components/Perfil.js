import React from "react";
import {StyleSheet, View, Image, Text} from 'react-native';
import ButtonPersonalizado from "./ButtonPersonalizado";

const Perfil = ({route, navigation}) => {
    return (
      <View>
        <Text style={styles.title}>Perfil</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cartoriogaucho.org.br/wp-content/uploads/2021/07/Ronaldinho-Ga%C3%BAcho.jpg',
          }}
        />
        <Text style={styles.paragrafo}>Nome: {route.params.nome}</Text>
        <Text style={styles.paragrafo}>Idade: {route.params.idade} anos</Text>
        <Text style={styles.paragrafo}>Email: {route.params.email}</Text>
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
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 20
  }
});

export default Perfil