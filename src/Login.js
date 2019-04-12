import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native'
import { connect } from 'react-redux'
import { login } from './store/actions/user'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Common/Styles'
import image from '../Assets/img/logo.png'
import TextField from './TextField'
import Button from './Button'


class App extends Component {

  state = {
    textFieldOnFocus: false,
    name: '',
    email: '',
    senha: ''
  }


  signin = () => {
    this.props.onLogin({...this.state})
    this.props.navigation.navigate('Home')
  }

  onFocus = (value) => {
    if (value) {
      this.setState({ textFieldOnFocus: true })
    } else {
      this.setState({ textFieldOnFocus: false })
    }
    
  }

  onChangeEmail = text => {
    this.setState({ email: text })
  }

  onChangeSenha = text => {
    this.setState({ senha: text })
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
                  <TextField onChangeText={this.onChangeEmail} onFocus={() => this.onFocus(true)} onEndEditing={() => this.onFocus(false)} placeholder="Usuário"></TextField>
              </View>
              <View style={styles.textBox}>
                  <Icon name='lock' size={30} style={styles.icon} />
                  <TextField onChangeText={this.onChangeSenha} onFocus={() => this.onFocus(true)} onEndEditing={() => this.onFocus(false)} placeholder="Senha" secureTextEntry></TextField>
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

const mapDispatchToProps = dispatch => {
  return {onLogin: user => dispatch(login(user))}
}

export default connect(null, mapDispatchToProps)(App)


