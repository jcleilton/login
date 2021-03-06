/**
 * @format
 */
import React from 'react'
import { Provider } from 'react-redux'
import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'

import storeConfig from './src/store/storeConfig'

const store = storeConfig()

const Redux = () => {
    return (
        <Provider store={store}>
            <App></App>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Redux);
