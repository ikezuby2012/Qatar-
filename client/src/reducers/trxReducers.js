import {
    INVESTMENT_SUCCESS, INVESTMENT_FAILURE, DEPOSIT_SUCCESS, DEPOSIT_FAILURE, WITHDRAWAL_FAILURE, WITHDRAWAL_SUCCESS
} from "../actions/types";

const initialState = {
    data: {},
    message: ""
}

const trxReducer = (state = initialState, action) => {
    switch (action.type) {
        case INVESTMENT_SUCCESS:
            return {
                data: action.payload,
                message: action.message
            }

        case INVESTMENT_FAILURE:
            return {
                ...state,
                data: {},
                message: action.message
            }
        case DEPOSIT_SUCCESS:
            return {
                data: action.payload,
                message: action.message
            }

        case DEPOSIT_FAILURE:
            return {
                ...state,
                data: {},
                message: action.message
            }
        case WITHDRAWAL_SUCCESS:
            return {
                data: action.payload,
                message: action.message
            }

        case WITHDRAWAL_FAILURE:
            return {
                ...state,
                data: {},
                message: action.message
            }
        default:
            return state;
    }
};

export default trxReducer;