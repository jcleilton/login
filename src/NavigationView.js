import React, { Component } from 'react'
import { View, Text } from 'react-native';
import ClienteView from './Clientes/ClienteView'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Common/Styles'
import SearchBar from './SearchBar'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class NavigationView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='bars' size={25} style={styles.iconNav}></Icon>
                    </TouchableOpacity>
                    <Text style={styles.titleNav}>{this.props.title}</Text>
                    <Icon name='filter' size={25} style={styles.iconNav}></Icon>
                </View>
                <SearchBar ></SearchBar>
                <ClienteView></ClienteView>
            </View>
            
        )
    }
}