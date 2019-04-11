import React from 'react'
import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from 'react-navigation'

import NavigationView from './src/NavigationView'
import Login from './src/Login'
import Menu from './src/Menu'

const MenuRoutes = {
  Home: {
    name: 'Home',
    screen: props => <NavigationView title='Home' index={0} {...props}></NavigationView>,
    navigationOptions: {
      title: 'Home'
    }
  },
  Clientes: {
    name: 'Clientes',
    screen: props => <NavigationView title='Clientes' index={1} {...props} ></NavigationView>,
    navigationOptions: {
      title: 'Clientes'
    }
  },
  Visitas: {
    name: 'Visitas',
    screen: props => <NavigationView title='Visitas' index={2} {...props} ></NavigationView>,
    navigationOptions: {
      title: 'Visitas'
    }
  },
}

const MenuConfig = {
  initialRouteName: 'Home',
  contentComponent: Menu,
  contentOptions: {
    labelStyle: {
      color: '#ccc',
      fontWeight: 'normal',
      fontSize: 20,
    },
    activeLabelStyle: {
      color: '#FFF',
      fontWeight: 'bold',
    }
  }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const MainRoutes = {
  Login: {
    name: 'Login',
    screen: Login
  },
  Home: {
    name: 'Home',
    screen: MenuNavigator
  }
}

const MainNavigator = createSwitchNavigator(MainRoutes, {
  initialRouteName: 'Login'
})

const AppContainer = createAppContainer(MainNavigator)

export default AppContainer
