import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import ButtonPersonalizado from "./ButtonPersonalizado";

const HomeScreen = ({route, navigation}) => {
  return (
    <View>
      <Text style={styles.title}>Home</Text>
      <ButtonPersonalizado
        title="Cadastro"
        onPress={() =>
          navigation.navigate('Cadastro')
        }
      />
      <ButtonPersonalizado
        title="IMC"
        onPress={() =>
          navigation.navigate('IMC')
        }
      />
      <ButtonPersonalizado
        title="Sobre"
        onPress={() =>
          navigation.navigate('Sobre')
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    backgroundColor: '#0fe',
    alignSelf: 'stretch',
    textAlign: 'center',
  }
});

export default HomeScreen