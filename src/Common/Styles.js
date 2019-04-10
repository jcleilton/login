import React from 'react'
import { StyleSheet, Platform } from 'react-native'

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
    },
    header: {
        height: 45,
        backgroundColor: '#66C1CB',
        marginTop: 44,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 5,
    },
    iconNav: {
        color: 'white',
    },
    titleNav: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
    },
    tableView: {
        backgroundColor: 'white',
        flex: 1,
        marginBottom: 20,
        marginHorizontal: 8,
        padding: 3,
    },
    titleClienteCell: {
        fontSize: 18,
        color: '#0D4B80',
        fontWeight: 'bold',
        marginTop: 8,

    },
    textClienteCell: {
        fontSize: 17,
        color: '#333',
    },
    search: {
        backgroundColor: '#0D4B80',
    },
    searchText: {
        backgroundColor: 'white',
        color: '#333',

    }
})

export default styles