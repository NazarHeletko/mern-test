import axios from "axios";


export const GET_USERS = 'users/GET_USERS'
export const DELETE_USER = 'users/DELETE_USERS'
export const UPDATE_USER = 'users/UPDATE_USER'
export const CREATE_USER = 'users/CREATE_USER'
export const OPEN_DIALOG_FORM_ADD_USER = 'users/OPEN_DIALOG_FORM_ADD_USER'
export const IS_USER_EDIT_OPEN = 'users/IS_USER_EDIT_OPEN'
export const SET_EDITED_USER = 'users/SET_EDITED_USER'
export const SET_INPUT_NAME = 'users/SET_INPUT_NAME'
export const DELETE_USER_SUCCESS = 'users/DELETE_USER_SUCCESS'
export const CREATE_USER_SUCCESS = 'users/CREATE_USER_SUCCESS'
export const CREATE_USER_ERROR = 'users/CREATE_USER_ERROR'
export const UPDATE_USER_SUCCESS = 'users/UPDATE_USER_SUCCESS'

export const updateUserSuccessAction  = (payload) => {
    return {
        type: UPDATE_USER_SUCCESS,
        payload
    }
}

export const createUserErrorAction  = (payload) => {
    return {
        type: CREATE_USER_ERROR,
        payload
    }
}

export const createUserSuccessAction  = (payload) => {
    return {
        type: CREATE_USER_SUCCESS,
        payload
    }
}

export const deleteUserSuccessAction  = (payload) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload
    }
}

export const setEditedUserAction  = (payload) => {
    return {
        type: SET_EDITED_USER,
        payload
    }
}

    export const setInputNameAction  = (payload) => {
    return {
        type: SET_INPUT_NAME,
         payload
    }
}

export const isUserEditOpenAction = (payload) => {
    return {
        type: IS_USER_EDIT_OPEN,
        payload
    }
}

export const openDialogAddUserAction = (payload) => {
    return {
        type: OPEN_DIALOG_FORM_ADD_USER,
        payload
    }
}

function getAllUsersAction(payload) {
    return {
        type: GET_USERS,
        payload
    }
}

export const getAllUsersThunk = () => {
    return (dispatch, getState) => {
        axios.get('http://localhost:5000/api/users').then(response => {
            dispatch(getAllUsersAction(response.data))
        }).catch(err => console.log(err))
    }
}

function deleteUserAction(uId) {
    return {
        type: DELETE_USER,
        payload: uId
    }
}

export const deleteUserThunk = ( uId) => {
    return (dispatch, getState) => {

        axios.delete('http://localhost:5000/api/users', {data: {id: uId}}).then(() => {
            dispatch(deleteUserAction(uId))
            dispatch(deleteUserSuccessAction(true))
        }).catch(err => console.log(err))
    }
}

function updateUserAction (payload) {
    return{
        type: UPDATE_USER,
        user: payload
    }
}

export const updateUserThunk = (user) => {
    return (dispatch, getState) => {
        axios.patch('http://localhost:5000/api/users', user).then(()=>{
            dispatch(updateUserAction(user))
            dispatch(updateUserSuccessAction(true))
        }).catch(err => console.log(err))
    }
}


function createUserAction (payload) {
    return{
        type: CREATE_USER,
        payload
    }
}

export const createUserThunk = (user) => {
    return (dispatch, getState) => {
        axios.post('http://localhost:5000/api/users', user).then(()=>{
            dispatch(createUserAction(user))
            dispatch(createUserSuccessAction(true))
        }).catch(err => dispatch(createUserErrorAction(true)))
    }
}