import React, { Component } from 'react';
import { 
    View
 } from 'react-native';
 import styles from '../Common/Styles'

 export default class Home extends Component {
     render() {
         return (
             <View styles={styles.container}>
                <View style={styles.upHome}>

                </View>
                <View style={styles.downHome}>
                    <View style={[styles.downHomeOne, {marginRight: 4,}]}>

                    </View>
                    <View style={[styles.downHomeOne, {marginLeft: 4,}]}>

                    </View>
                </View>
             </View>
         )
     }
 }