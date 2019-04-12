import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import ActionButton from 'react-native-action-button'


import VisitasCell from './VisitasCell'
import styles from '../Common/Styles'
export default class VisitasView extends Component {
    state = {
        visitas: [
            {
                name: 'Comercial Dantas',
                code: '771234001003',
                inicio: '26/03/2019 14h00min10seg',
                fim: '26/03/2019 15h16min00seg',
                envio: 'Enviado',
                status: 'Finalizada',
                id: 1,
            },

        ]
    }
    render() {
        return (
            <View style={ styles.tableView }>
                <FlatList data={this.state.visitas} keyExtractor={item => `${item.id}`} renderItem={({ item }) => <VisitasCell {...item}></VisitasCell>}>

                </FlatList>
                <ActionButton buttonColor={'#0D4B80'} onPress={() => {  }}/>
            </View>
        )
    }
}