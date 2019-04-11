import React from 'react'
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    TouchableOpacity
} from 'react-native'
import colors from './Common/colors'

import { DrawerItems } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {

    const logout = () => {
        
    }

    return (
        <ScrollView style={{backgroundColor: colors.mainColor,}}>
            <View style={styles.header}>
                <Text style={styles.title}>SBVendas</Text>
                
                <View style={styles.userInfo}>
                    <View>
                        <Text style={styles.name}>{props.navigation.getParam('name')}</Text>
                        <Text style={styles.email}>{props.navigation.getParam('email')}</Text>
                    </View>
                    <TouchableOpacity onPress={logout}>
                        <View style={styles.logoutButton}>
                            <Icon name='sign-out' size={30} color='#FFF'></Icon>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <DrawerItems {...props} />
        </ScrollView>
    )
    
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#DDD',
    },
    title: {
        color: '#FFF',
        fontSize: 30,
        paddingTop: 30,
        padding: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderColor: '#AAA',
        borderRadius: 30,
        margin: 10,
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        color: '#FFF',
        fontSize: 20,
        marginLeft: 10,
    },
    email: {
        color: '#FFF',
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 10,
    },
    menu: {
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    logoutButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    }
})