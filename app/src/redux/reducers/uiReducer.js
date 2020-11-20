import { SET_ERRORS, SET_ERRORS_LOGIN, SET_ERRORS_REGISTOR, CLEAR_ERRORS, LOADING_UI, STOP_LOADING_UI } from '../types';

const initialState = {
    loading: false,
    errors: null
};

export default function(state = initialState, action){
    switch(action.type){
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload.message
            };
        case SET_ERRORS_LOGIN:
            return {
                ...state,
                loading: false,
                errors: action.payload.data.message
            };
        case SET_ERRORS_REGISTOR:
            return {
                ...state,
                loading: false,
                errors: action.payload.data.message
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: null
            };
        case LOADING_UI:
            return {
                ...state,
                loading: true
            };
        case STOP_LOADING_UI:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}