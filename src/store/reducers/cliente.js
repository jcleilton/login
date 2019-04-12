import { ADD_CLIENT } from '../actions/actionsType'

const initialState = {
    clients: [
        {
            fantasyName: 'Comercial Dantas',
            cnpj: '771234001003',
            address: 'Av. Sen. Virgílio Távaro, 1100',
            id: 1,
        },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CLIENT:
        return {
            ...state,
            clients: state.clients.concat({
                ...action.payload
            })
        }
        default:
        return state
    }
}

export default reducer
