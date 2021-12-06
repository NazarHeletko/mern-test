import {
    GET_GROUPS,
    DELETE_GROUP,
    DELETE_GROUP_ERROR,
    DELETE_GROUP_SUCCESS,
    OPEN_ADD_GROUP_MODAL,
    CREATE_NEW_GROUP,
    ADD_GROUP_SUCCESS,
    ADD_GROUP_ERROR,
    OPEN_EDIT_MODAL_GROUP,
    SET_EDITED_GROUP_DATA, UPDATE_GROUP_DATA, UPDATE_GROUP_DATA_SUCCESS
} from "../actions/groups-action";


let initialState = {
    groups: [],
    editedGroup: {
        _id: '',
        name: '',
        description: ''
    },
    deleteGroupError: false,
    deleteGroupSuccess: false,
    openAddGroupModal: false,
    addNewGroupSuccess: false,
    addNewGroupError: false,
    isEditGroupModalOpen: false,
    updateGroupDataSuccess: false
}

export const groupsReducer = (state=initialState, action) => {
    switch(action.type){
        case OPEN_EDIT_MODAL_GROUP:
            return{
                ...state,
                isEditGroupModalOpen: action.payload
            }
        case ADD_GROUP_ERROR:
            return{
                ...state,
                addNewGroupError: action.payload
            }
        case ADD_GROUP_SUCCESS:
            return{
                ...state,
                addNewGroupSuccess: action.payload
            }
        case CREATE_NEW_GROUP:
            return{
                ...state,
                groups: [...state.groups, action.payload]
            }
        case OPEN_ADD_GROUP_MODAL:
            return {
                ...state,
                openAddGroupModal: action.payload

            }
        case DELETE_GROUP_SUCCESS:
            return {
                ...state,
                deleteGroupSuccess: action.payload
            }
        case DELETE_GROUP_ERROR:
            return {
                ...state,
                deleteGroupError: action.payload
            }
        case GET_GROUPS:
            return{
                ...state,
                groups: action.payload
            }
        case DELETE_GROUP:
            return{
                ...state,
                groups: state.groups.filter(el => el._id !== action._id)
            }
        case SET_EDITED_GROUP_DATA:
            return{
                ...state,
                editedGroup: action.payload
            }
        case UPDATE_GROUP_DATA_SUCCESS:
            return{
                ...state,
                updateGroupDataSuccess: action.payload
            }
        case UPDATE_GROUP_DATA:
            return{
                ...state,
                groups: state.groups.map(el=>{
                    if(el._id === action.payload._id){
                        return {
                            _id: action.payload._id,
                            name: action.payload.name,
                            description: action.payload.description
                        }
                    }
                    return el
                })
            }
        default: return state
    }
}