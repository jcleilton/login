import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import ClienteCell from './ClienteCell'
import styles from '../Common/Styles'
export default class ClienteView extends Component {
    state = {
        clients: [
            {
                fantasyName: 'Comercial Dantas',
                cnpj: '771234001003',
                address: 'Av. Sen. Virgílio Távaro, 1100',
                id: 1,
            },
            {
                fantasyName: 'Sodine LTDA',
                cnpj: '771234001003',
                address: 'Av. Expedicionários, 33300',
                id: 2,
            },
            {
                fantasyName: 'Mercadinho São Luis',
                cnpj: '771234001003',
                address: 'Rua Padre Anchieta, 302',
                id: 3,
            },
            {
                fantasyName: 'Casas Galvão',
                cnpj: '771234001003',
                address: 'Rua sem Nome, S/N',
                id: 4,
            },
            {
                fantasyName: 'Casa das Massas',
                cnpj: '771234001003',
                address: 'Av. Pres. Castelo Branco, 20293',
                id: 5,
            },
            {
                fantasyName: 'Soares Neto S/A',
                cnpj: '771234001003',
                address: 'Rua dos Navegantes, 20333',
                id: 6,
            },
            {
                fantasyName: 'Outra Empresa',
                cnpj: '771234001003',
                address: 'Rua sem Criatividade, Nao sei',
                id: 7,
            },
            {
                fantasyName: 'Chegou por agora',
                cnpj: '771234001003',
                address: 'Rua To com Sono, 123',
                id: 8,
            },

        ]
    }
    render() {
        return (
            <View>
                <FlatList data={this.state.clients} keyExtractor={item => `${item.id}`} renderItem={({ item }) => <ClienteCell {...item}></ClienteCell>}>

                </FlatList>
            </View>
        )
    }
}