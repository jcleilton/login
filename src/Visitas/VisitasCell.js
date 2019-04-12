import React from 'react'
import { 
    View,
    Text
 } from 'react-native'
 import styles from '../Common/Styles'

 export default props => {
     return (
         <View>
             <Text style={styles.titleClienteCell}>{props.fantasyName}</Text>
             <Text style={styles.textClienteCell}>{props.fantasyName}</Text>
             <Text style={styles.textClienteCell}>{props.cnpj}</Text>
             <Text style={styles.textClienteCell}>{props.address}</Text>
         </View>
     )
 }