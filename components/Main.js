import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Cadastro from './Cadastro';
import IMC from './IMC';
import Perfil from './Perfil';
import Resultado from './Resultado';
import Sobre from './Sobre';

const Stack = createNativeStackNavigator();

const Main = () => {
    return (<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="IMC" component={IMC} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Resultado" component={Resultado} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>)
}

export default Main