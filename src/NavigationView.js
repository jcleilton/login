import React, { Component } from 'react'
import { View, Text } from 'react-native';
import ClienteView from './Clientes/ClienteView'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Common/Styles'
import SearchBar from './SearchBar'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Home from './Home/Home'

export default class NavigationView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='bars' size={25} style={styles.iconNav}></Icon>
                    </TouchableOpacity>
                    <Text style={styles.titleNav}>{this.props.title}</Text>
                    {(this.props.index === 0) ? <View style={{width: 25}}/> : <Icon name='filter' size={25} style={styles.iconNav}></Icon>}
                </View>
                {(this.props.index === 0) && <Home></Home>}
                {(this.props.index === 1) && <SearchBar></SearchBar>}
                {(this.props.index === 1) && <ClienteView></ClienteView>}
                
            </View>
            
        )
    }
}