import React from 'react'
import { TextInput } from 'react-native'
import styles from './Common/Styles'

export default props => {
    return (
        <TextInput placeholderTextColor="#999" autoCapitalize="none" placeholder= {props.placeholder} secureTextEntry={props.secureTextEntry} style={[styles.textField, props.secureTextEntry ? styles.secureTextEntry : {}]}></TextInput>
    )
}