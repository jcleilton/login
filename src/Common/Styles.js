import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import colors from './colors'

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
        backgroundColor: colors.secondaryColor,
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
        backgroundColor: colors.mainColor,
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
        backgroundColor: colors.secondaryColor,
        marginTop: Platform.OS === 'ios' ? 44 : 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 5,
    },
    iconNav: {
        color: 'white',
        height: 25,
        width: 25,
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
        color: colors.mainColor,
        fontWeight: 'bold',
        marginTop: 8,

    },
    textClienteCell: {
        fontSize: 17,
        color: '#333',
    },
    search: {
        backgroundColor: colors.mainColor,
    },
    searchText: {
        backgroundColor: 'white',
        color: '#333',

    },
    upHome: {
        height: '35%',
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 4,
    },
    downHome: {
        height: '55%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    downHomeOne: {
        flex: 1,
        height: '100%',
        backgroundColor: colors.secondaryColor,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 4,
    }

})

export default styles