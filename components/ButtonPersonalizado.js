import {TouchableOpacity, Text, StyleSheet} from 'react-native'

const ButtonPersonalizado = (props) => {
    return (
        <TouchableOpacity {...props} style={styles.button}>
            <Text style={styles.textButton}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 300,
        alignSelf: 'center',
        backgroundColor: '#0fe',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 30,
        textAlign: 'center',
    }
  });
  

export default ButtonPersonalizado