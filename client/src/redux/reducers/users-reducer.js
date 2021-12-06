import {
    DELETE_USER,
    GET_USERS,
    CREATE_USER,
    OPEN_DIALOG_FORM_ADD_USER,
    IS_USER_EDIT_OPEN,
    UPDATE_USER,
    SET_EDITED_USER,
    SET_INPUT_NAME,
    DELETE_USER_SUCCESS,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    UPDATE_USER_SUCCESS
} from "../actions/users-actions";

let initialState = {
    users: [],
    editedUser: {
        _id: '',
        name: '',
        group: ''
    },
    userEditDialogOpen: false,
    isUserEditOpen: false,
    deleteUserSuccess: false,
    createUserSuccess: false,
    createUserError: false,
    updateUserSucess: false
}

export const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                updateUserSucess: action.payload
            }
        case CREATE_USER_ERROR:
            return {
                ...state,
                createUserError: action.payload
            }
        case CREATE_USER_SUCCESS:
            return{
                ...state,
                createUserSuccess: action.payload
            }
        case DELETE_USER_SUCCESS:
            return{
                ...state,
                deleteUserSuccess: action.payload
            }
        case SET_INPUT_NAME:
            return {
                ...state, editedUser: {...state.editedUser, name: action.payload}
            }
        case SET_EDITED_USER:
            return{
                ...state, editedUser: action.payload
            }
        case IS_USER_EDIT_OPEN:
            return{
                ...state, isUserEditOpen: action.payload
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(el => el._id !== action.payload)
            }
        case OPEN_DIALOG_FORM_ADD_USER:
            return {
                ...state,
                userEditDialogOpen: action.payload
            }
        case CREATE_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el._id === action.user.id){
                        let userToUpdate = el
                        let userChanges = action.user
                        delete userChanges.id
                        let updatedUser = Object.assign(userToUpdate, userChanges)
                        return updatedUser
                    }
                    return el
                })
            }
        default: return state
    }
}