import {React, useState} from "react";
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import ButtonPersonalizado from "./ButtonPersonalizado";

const IMC = ({route, navigation}) => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    return (
      <View>
        <Text style={styles.title}>IMC</Text>
        <TextInput
            style={styles.input}
            onChangeText={setPeso}
            value={peso}
            placeholder="Peso"
            keyboardType="numeric"
        />
        <TextInput
            style={styles.input}
            onChangeText={setAltura}
            value={altura}
            placeholder="Altura"
            keyboardType="numeric"
        />
        <ButtonPersonalizado 
            title="OK"
            onPress={() =>
            navigation.navigate('Resultado', {peso: peso, altura: altura})
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

export default IMC