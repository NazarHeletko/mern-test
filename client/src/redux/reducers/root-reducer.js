import { combineReducers } from 'redux'
import {usersReducer} from './users-reducer.js'
import {groupsReducer} from './group-reducer.js'
import {pageReducer} from './page--reducer.js'


export const rootReducer = combineReducers({
    users: usersReducer,
    groups: groupsReducer,
    page: pageReducer
})