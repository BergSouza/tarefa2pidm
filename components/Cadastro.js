import React from "react";
import {StyleSheet, View, Text, TextInput} from 'react-native'
import ButtonPersonalizado from "./ButtonPersonalizado";

const Cadastro = ({route, navigation}) => {
    const [nome, setNome] = React.useState('');
    const [idade, setIdade] = React.useState('');
    const [email, setEmail] = React.useState('');
    return (
      <View>
        <Text style={styles.title}>Cadastro</Text>
        <TextInput
            style={styles.input}
            onChangeText={setNome}
            value={nome}
            placeholder="Nome"
        />
        <TextInput
            style={styles.input}
            onChangeText={setIdade}
            value={idade}
            placeholder="Idade"
            keyboardType="numeric"
        />
        <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
        />
        <ButtonPersonalizado 
            title="OK"
            onPress={() =>
            navigation.navigate('Perfil', {nome: nome, idade: idade, email: email})
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
  input: {
    height: 50,
    fontSize: 30,
    color: '#3af'
  }
});
  
export default Cadastro