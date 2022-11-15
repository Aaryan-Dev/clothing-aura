import axios from "axios";
import * as types from './actionTypes';

const { REACT_APP_API_URL } = process.env;
console.log(REACT_APP_API_URL);
const userAuthentication = (payload) => (dispatch) => {
    dispatch({ type: types.USER_LOGIN_REQUEST });
    return axios.post(`${REACT_APP_API_URL}/login/`, payload).then((res) => {
        return dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
    }).catch((err) => {
        return dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
    })
}

const userSignup = (payload) => (dispatch) => {
    dispatch({ type: types.USER_SIGNUP_REQUEST });
    return axios.post(`${REACT_APP_API_URL}/signup/`, payload).then((res) => {
        return dispatch({ type: types.USER_SIGNUP_SUCCESS, payload: res.data });
    }).catch((err) => {
        return dispatch({ type: types.USER_SIGNUP_FAILURE, payload: err });
    })
}

const userSignOut = (payload) => (dispatch) => {
    dispatch({ type: types.USER_SIGNOUT_SUCCESS });
}

const adminAuthentication = (payload) => (dispatch) => {
    dispatch({ type: types.USER_LOGIN_REQUEST });
    return axios.post(`${REACT_APP_API_URL}/member/`, payload).then((res) => {
        return dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
    }).catch((err) => {
        return dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
    })
}

const dashUserDelete = (payload, headers) => (dispatch) => {
    dispatch({ type: types.USER_DELETE_REQUEST });
    return axios.delete(`${REACT_APP_API_URL}/dashboard/delete/user/${payload.id}`, headers).then((res) => {
        return dispatch({ type: types.USER_DELETE_SUCCESS, payload: res.data });
    }).catch((err) => {
        return dispatch({ type: types.USER_DELETE_FAILURE, payload: err });
    })
}

const dashUserData = (payload) => (dispatch) => {
    dispatch({ type: types.USER_DATA_REQUEST });
    return axios.get(`${REACT_APP_API_URL}/dashboard/users`, payload).then((res) => {
        if (!res.data.status) {
            return dispatch({ type: types.USER_DATA_FAILURE, payload: res.data });
        } else {
            return dispatch({ type: types.USER_DATA_SUCCESS, payload: res.data });
        }
    }).catch((err) => {
        return dispatch({ type: types.USER_DATA_FAILURE, payload: err });
    })
}

export { userAuthentication, dashUserDelete, dashUserData, userSignup, userSignOut, adminAuthentication }