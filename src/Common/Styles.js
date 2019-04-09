import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    rodape: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    subTest: {
        color: 'white',
        marginBottom: 15,
    },
    buttonContainer: {
        marginTop: 50,
        backgroundColor: '#66C1CB',
        width: 180,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#999',
        borderRadius: 5,
    },
    button: {
        color: 'white',
        fontWeight: 'bold',

    },
    icon: {
        padding: 10,
        alignItems: 'center',
        color: 'white'
    },
    textBox: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    secureTextEntry: {

    },
    textField: {
        color: '#FFF',
        borderColor: '#FFF',
        borderBottomWidth: 1,
        width: 150,
    },
    container: {
        flex: 1,
        backgroundColor: '#0D4B80',
    },
    super: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sub: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: "50%",
        resizeMode: 'contain'
    }
})

export default styles