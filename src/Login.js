import React, {Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Common/Styles'
import image from '../Assets/img/logo.png'
import TextField from './TextField'
import Button from './Button'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.super}>
            <Image source={image} style={styles.image}></Image>
        </View>
        <View style={styles.sub}>
            <View style={styles.textBox}>
                <Icon name='user' size={30} style={styles.icon} />
                <TextField placeholder="Usuário"></TextField>
            </View>
            <View style={styles.textBox}>
                <Icon name='lock' size={30} style={styles.icon} />
                <TextField placeholder="Senha" secureTextEntry></TextField>
            </View>
            <Button></Button>
            
        </View>
        <View style={styles.rodape}>
            <Text style={styles.subTest}>Developed by {'\u00A9'} SoftBuilder</Text>
        </View>
      </View>
    )
  }
}
