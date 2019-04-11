import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Common/Styles'
import image from '../Assets/img/logo.png'
import TextField from './TextField'
import Button from './Button'

export default class App extends Component {

  state = {
    textFieldOnFocus: false
  }

  signin = () => {
    this.props.navigation.navigate('Home')
  }

  onFocus = (value) => {
    if (value) {
      this.setState({ textFieldOnFocus: true })
    } else {
      this.setState({ textFieldOnFocus: false })
    }
    
  }

  render() {
    return (
      
        <View style={styles.container}  onTouchStart={ Keyboard.dismiss } >
          <View style={styles.super}>
              <Image source={image} style={styles.image}></Image>
          </View>
          <KeyboardAvoidingView behavior="padding" style={styles.sub}>
              <View style={styles.textBox}>
                  <Icon name='user' size={30} style={styles.icon} />
                  <TextField onFocus={() => this.onFocus(true)} onEndEditing={() => this.onFocus(false)} placeholder="Usuário"></TextField>
              </View>
              <View style={styles.textBox}>
                  <Icon name='lock' size={30} style={styles.icon} />
                  <TextField onFocus={() => this.onFocus(true)} onEndEditing={() => this.onFocus(false)} placeholder="Senha" secureTextEntry></TextField>
              </View>
              <Button action={this.signin}></Button>
              
          </KeyboardAvoidingView>
          <View style={styles.rodape}>
              <Text style={styles.subTest}>Developed by {'\u00A9'} SoftBuilder</Text>
          </View>
        </View>
    )
  }
}
