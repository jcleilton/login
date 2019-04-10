import React from 'react'
import { 
    View,
    Text
 } from 'react-native'

 export default props => {
     return (
         <View>
             <Text>{props.fantasyName}</Text>
             <Text>{props.fantasyName}</Text>
             <Text>{props.cnpj}</Text>
             <Text>{props.address}</Text>
         </View>
     )
 }