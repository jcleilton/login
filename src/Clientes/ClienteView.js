import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import ActionButton from 'react-native-action-button'
import { connect} from 'react-redux'
import { addCliente,  } from '../store/actions/cliente'


import ClienteCell from './ClienteCell'
import styles from '../Common/Styles'
class ClienteView extends Component {
    state = {
        clients: this.props.clients,
    }

    save = async () => {
        this.props.addCliente({
            //cliente
        })
    }
    render() {
        return (
            <View style={ styles.tableView }>
                <FlatList data={this.state.clients} keyExtractor={item => `${item.id}`} renderItem={({ item }) => <ClienteCell {...item}></ClienteCell>}>

                </FlatList>
                <ActionButton buttonColor={'#0D4B80'} onPress={() => {  }}/>
            </View>
        )
    }
}

const mapStateToProps = ( {clients} ) => {
    return {
        clients: clients.clients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCliente: client => dispatch(addCliente(client))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClienteView)