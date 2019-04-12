import { ADD_CLIENT } from './actionsType'

export const addCliente = client => {
    return {
        type: ADD_CLIENT,
        payload: client
    }
}