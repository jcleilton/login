import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { logout } from './store/actions/user'
import ClienteView from './Clientes/ClienteView'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Common/Styles'
import SearchBar from './SearchBar'
import Home from './Home/Home'
import VisitasView from './Visitas/VisitasView'

class NavigationView extends Component {

    state = {
        name: this.props.name,
        email: this.props.email,
        
    }

    onLogout = () => {this.props.onLogout()}

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconNav} onPress={() => {this.props.navigation.openDrawer()}}>
                        <Icon name='bars' size={25} style={[styles.iconNav, { }]}></Icon>
                    </TouchableOpacity>
                    <Text style={styles.titleNav}>{`${this.props.title}`}</Text>
                    {(this.props.index === 0) ? <View style={{width: 25}}/> : <Icon name='filter' size={25} style={styles.iconNav}></Icon>}
                </View>
                {(this.props.index === 0) && <Home></Home>}
                {(this.props.index === 1 || this.props.index === 2) && <SearchBar></SearchBar>}
                {(this.props.index === 1) && <ClienteView></ClienteView>}
                {(this.props.index === 2) && <VisitasView></VisitasView>}
                
            </View>
            
        )
    }
}



const mapStateToProps = ({user}) => {
    return {
        email: user.email,
        name: user.name
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationView)
