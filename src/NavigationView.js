import React, { Component } from 'react'
import { View, Text } from 'react-native';
import ClienteView from './Clientes/ClienteView'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Common/Styles'

export default class NavigationView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon name='bars' size={25} style={styles.iconNav}></Icon>
                    <Text style={styles.titleNav}>Clientes</Text>
                    <Icon name='filter' size={25} style={styles.iconNav}></Icon>
                </View>
                <ClienteView></ClienteView>
            </View>
            
        )
    }
}