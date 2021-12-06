import {CHANGE_PAGE} from "../actions/page-actions";


let initialState = {
    activePage: 'users'
}

export const pageReducer = (state=initialState, action) => {
    switch(action.type){
        case CHANGE_PAGE:
            return {
                ...state,
                activePage: action.payload
            }
        default: return state
    }
}