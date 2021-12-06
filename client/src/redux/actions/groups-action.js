import axios from "axios";


export const GET_GROUPS = 'groups/GET_GROUPS'
export const DELETE_GROUP = 'groups/DELETE_GROUP'
export const DELETE_GROUP_ERROR = 'groups/DELETE_GROUP_ERROR'
export const DELETE_GROUP_SUCCESS = 'groups/DELETE_GROUP_SUCCESS'
export const OPEN_ADD_GROUP_MODAL = 'groups/OPEN_ADD_GROUP_MODAL'
export const CREATE_NEW_GROUP = 'groups/CREATE_NEW_GROUP'
export const ADD_GROUP_SUCCESS = 'groups/ADD_GROUP_SUCCESS'
export const ADD_GROUP_ERROR = 'groups/ADD_GROUP_ERROR'
export const OPEN_EDIT_MODAL_GROUP = 'groups/OPEN_EDIT_MODAL_GROUP'
export const SET_EDITED_GROUP_DATA = 'groups/SET_EDITED_GROUP_DATA'
export const UPDATE_GROUP_DATA = 'groups/UPDATE_GROUP_DATA'
export const UPDATE_GROUP_DATA_SUCCESS = 'groups/UPDATE_GROUP_DATA_SUCCESS'

export function updateGroupDataSuccessAction(payload) {
    return {
        type: UPDATE_GROUP_DATA_SUCCESS,
        payload
    }
}

function updateGroupDataAction(payload) {
    return {
        type: UPDATE_GROUP_DATA,
        payload
    }
}

export const updateGroupThunk = (group) => {
    return (dispatch, getState) => {
        axios.put('http://localhost:5000/api/groups', group).then(response => {
            dispatch(updateGroupDataAction(group))
            dispatch(updateGroupDataSuccessAction(true))
        }).catch(err => console.log(err))
    }
}

export function setEditedGroupDatalAction(payload) {
    return {
        type: SET_EDITED_GROUP_DATA,
        payload
    }
}

export function openEditModalAction(payload) {
    return {
        type: OPEN_EDIT_MODAL_GROUP,
        payload
    }
}

export function addGroupErrorAction(payload) {
    return {
        type: ADD_GROUP_ERROR,
        payload
    }
}

export function addGroupSuccessAction(payload) {
    return {
        type: ADD_GROUP_SUCCESS,
        payload
    }
}

export function addNewGroupAction(payload) {
    return {
        type: CREATE_NEW_GROUP,
        payload
    }
}

export const addNewGroupThunk = (group) => {
    return (dispatch, getState) => {
        axios.post('http://localhost:5000/api/groups', group).then(response => {
            dispatch(addNewGroupAction(response.data))
        }).catch(err => console.log(err))
    }
}

export function openAddUserModalAction(payload) {
    return {
        type: OPEN_ADD_GROUP_MODAL,
        payload
    }
}

export function deleteGroupSuccessAction(payload) {
    return {
        type: DELETE_GROUP_SUCCESS,
        payload
    }
}

export function deleteGroupErrorAction(payload) {
    return {
        type: DELETE_GROUP_ERROR,
        payload
    }
}


function deleteGroupAction(payload) {
    return {
        type: DELETE_GROUP,
        _id: payload
    }
}

export const deleteGroupThunk = (name, _id) => {
    return (dispatch, getState) => {
        axios.delete('http://localhost:5000/api/groups', {data: {name, _id}}).then(response => {
            dispatch(deleteGroupAction(_id))
            dispatch(deleteGroupSuccessAction(true))
        }).catch(err => dispatch(deleteGroupErrorAction(true)))
    }
}

function getAllGroupsAction(payload) {
    return {
        type: GET_GROUPS,
        payload
    }
}

export const getAllGroupsThunk = () => {
    return (dispatch, getState) => {
        axios.get('http://localhost:5000/api/groups').then(response => {
            dispatch(getAllGroupsAction(response.data))
        }).catch(err => console.log(err))
    }
}


