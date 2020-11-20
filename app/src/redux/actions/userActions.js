import { SET_USER, SET_ERRORS_LOGIN, SET_ERRORS_REGISTOR, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED, LOADING_USER, STOP_LOADING_UI } from '../types';
import axios from 'axios';

export const loginUser = (userData) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/login', userData)
            .then(res => {
                localStorage.userId = res.data.id;
                setAuthorizationHeader(res.data.token);
                dispatch(getUserData(res.data.id));
                dispatch({ type: CLEAR_ERRORS });
                dispatch({ type: STOP_LOADING_UI });
            })
            .catch(err => {
                dispatch({  
                    type: SET_ERRORS_LOGIN,
                    payload: err.response
                });
            });
};

export const registor = (newUserData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/registor', newUserData)
            .then(res => {
                setAuthorizationHeader(res.data.token);
                dispatch(getUserData(res.data.id));
                dispatch({ type: CLEAR_ERRORS });
                dispatch({ type: STOP_LOADING_UI });
            })
            .catch(err => {
                dispatch({  
                    type: SET_ERRORS_REGISTOR,
                    payload: err.response
                });
            });
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBidToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
}

export const getUserData = (id) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get(`/user/${id}`)
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data,
            })
        })
        .catch(err => console.log(err));
}

export const uploadImage = (id, formData) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.post(`/user/image/${id}`, formData)
        .then(res => {
            dispatch(getUserData(id));
        })
        .catch(err => console.log(err));
};

const setAuthorizationHeader = (token) => {
    const FBidToken =  `Bearer ${token}`;
    localStorage.setItem('FBidToken', FBidToken);
    axios.defaults.headers.common['Authorization'] = FBidToken;
}