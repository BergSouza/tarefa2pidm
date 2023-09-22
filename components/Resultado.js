import {React, useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ButtonPersonalizado from './ButtonPersonalizado';

const Resultado = ({route, navigation}) => {
    const [imc, setImc] = useState(0);
    const [imcText, setImcText] = useState('Normal')

    useEffect(() => {
        const peso = route.params.peso
        const altura = route.params.altura
        setImc(peso/(altura*altura))
        if(imc < 17){
            setImcText("Muito abaixo do peso")
        }if(imc > 17 && imc < 18.49){
            setImcText("Abaixo do peso")
        }if(imc > 18.50 && imc < 24.99){
            setImcText("Peso normal")
        }if(imc > 25.00 && imc < 29.99){
            setImcText("Acima do peso")
        }if(imc > 30.00 && imc < 34.99){
            setImcText("Obsesidade I")
        }if(imc > 35.00 && imc < 39.99){
            setImcText("Obesidade II (severa)")
        }if(imc > 40.00){
            setImcText("Obesidade III (mórbida)")
        }
    }, [imc])
    
    return (
        <View>
          <Text style={styles.title}>Resultado</Text>
          <Text style={styles.paragrafo}>Seu IMC é: {imc.toFixed(2)}</Text>
          <Text style={styles.paragrafo}>{imcText}</Text>
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

export default Resultado