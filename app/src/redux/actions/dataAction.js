import { SET_RESTAURANTS, SET_RESTAURANT, FILTER_RESTAURANTS, DELETE_RESTAURANT, UPDATE_RESTAURANT, POST_RESTAURANT, 
    LOADING_DATA, STOP_LOADING_UI, LOADING_UI, SET_ERRORS, CLEAR_ERRORS } from '../types';
import axios from 'axios';

// // Get all restaurants
export const getRestaurants = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get('/restaurants')
        .then(res => {
            dispatch({
                type: SET_RESTAURANTS,
                payload: res.data
            })
            dispatch({ type: STOP_LOADING_UI });
        })
        .catch(err => {
            dispatch({
                type: SET_RESTAURANTS,
                payload: []
            })
        })
}

// Post a restaurant
export const postRestaurant = (newData) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.post('/restaurant', newData)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: POST_RESTAURANT,
                payload: res.data
            })
            dispatch(clearErrors())
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

// Delete a restaurant
export const deleteRestaurant = (id) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get(`/restaurant/delete/${id}`)
        .then(() => {
            dispatch({ type: DELETE_RESTAURANT, payload: id })
        })
        .catch(err => console.log(err));
}

//Update a restaurant
export const updateRestaurant = (id, newData) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.patch(`/restaurant/${id}`, newData)
        .then(res => {
            const result = {
                restaurant : {
                    ...res.data.restaurant,
                    id: id,
                },
                message: "Update successfully!"
            }
            dispatch({
                type: UPDATE_RESTAURANT,
                payload: result
            })
            dispatch(clearErrors())
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: "Update failed!"
            })
        })  
}

//Filter
export const filter = (constraint) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get(`/restaurantsFilter/${constraint}`)
        .then(res => {
            dispatch({
                type: FILTER_RESTAURANTS,
                payload: res.data
            })
            dispatch({ type: STOP_LOADING_UI });
        })
        .catch(err => {
            dispatch({
                type: FILTER_RESTAURANTS,
                payload: []
            })
        })
}

// Load image
export const uploadImage = (formData, id) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post(`/restaurant/image/${id}`, formData)
        .then(res => {
            dispatch(getOne(id));
            dispatch({ type: STOP_LOADING_UI });
        })
        .catch(err => console.log(err));
}

export const getOne = (id) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get(`/restaurant/${id}`)
        .then(res => {
            dispatch({
                type: SET_RESTAURANT,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}

export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}

