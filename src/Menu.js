import React, {Component} from 'react'
import {connect} from 'react-redux'

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

class Menu extends Component {
    state = {
        name: this.props.name,
        email: this.props.email
    }

     logout = () => {
        this.props.navigation.navigate('Login')
    }
render() {
    return (
        <ScrollView style={{backgroundColor: colors.mainColor,}}>
            <View style={styles.header}>
                <Text style={styles.title}>SBVendas</Text>
                
                <View style={styles.userInfo}>
                    <View>
                        <Text style={styles.name}>{this.state.name || 'Visitante'}</Text>
                        <Text style={styles.email}>{this.state.email}</Text>
                    </View>
                    <TouchableOpacity onPress={this.logout}>
                        <View style={styles.logoutButton}>
                            <Icon name='sign-out' size={30} color='#FFF'></Icon>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <DrawerItems {...this.props} />
        </ScrollView>
    )
}
    
    
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

const mapStateToProps = ({user}) => {
    return {
        email: user.email,
        name: user.name
    }
}

export default connect(mapStateToProps, null)(Menu)