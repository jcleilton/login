import {
    createStore, combineReducers
} from 'redux'
import userReducer from './reducers/user'
import clientesReducer from './reducers/cliente'

const reducers = combineReducers({
    user: userReducer,
    clients: clientesReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig