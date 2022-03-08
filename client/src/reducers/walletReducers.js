import {
    CREATE_WALLET_SUCCESS,CREATE_WALLET_FAILURE,GET_USER_WALLET_FAILURE,GET_USER_WALLET_SUCCESS
} from "../actions/types";

const initialState = {
    data: {},
    message: ""
}

const walletReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_WALLET_SUCCESS:
            return {
                data: action.payload,
                message: action.message
            }

        case CREATE_WALLET_FAILURE:
            return {
                ...state,
                data: {},
                message: action.message
            }
        case GET_USER_WALLET_SUCCESS:
            return {
                data: action.payload,
                message: action.message
            }

        case GET_USER_WALLET_FAILURE:
            return {
                ...state,
                data: {},
                message: action.message
            }
        default:
            return state;
    }
};

export default walletReducer;