import {SET_RESTAURANTS, SET_RESTAURANT, DELETE_RESTAURANT, POST_RESTAURANT, LOADING_DATA, FILTER_RESTAURANTS, UPDATE_RESTAURANT} from '../types';

const initialState = {
    restaurants: [],
    restaurantsFilter: [],
    restaurant: {},
    loading: false,
    message: "",
};

export default function(state = initialState, action){
    let index;
    switch(action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        case SET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload,
                loading: false
            }
        case SET_RESTAURANT: 
            return {
                ...state,
                loading: false,
                message: "Loaded image",
                restaurant: action.payload
            }
        case FILTER_RESTAURANTS:
            return {
                ...state,
                restaurantsFilter: action.payload,
                loading: false
            }
        case POST_RESTAURANT:
            state.restaurants.push(action.payload);
            return {
                ...state,
                loading: false,
                message: action.payload.message
            }
        case UPDATE_RESTAURANT: 
            index = state.restaurants.findIndex(restaurant => restaurant.id === action.payload.restaurant.id);
            state.restaurants.splice(index, 1);
            state.restaurants.push(action.payload.restaurant);
           
            // Sort by date
            state.restaurants.sort((a, b) => (a.dateCreate < b.dateCreate) ? 1 : (a.dateCreate === b.dateCreate) ? ((a.type > b.type) ? 1 : -1) : -1 )
            return {
                ...state,
                loading: false,
                restaurantsFilter: [],
                message: action.payload.message
            }
        case DELETE_RESTAURANT:
            index = state.restaurants.findIndex(restaurant => restaurant.id === action.payload);
            state.restaurants.splice(index, 1);
            return {
                ...state,
                loading: false
            }
        default: 
            return state
    }
}