import React from 'react';
import {combineReducers, createStore} from 'redux'
import {usersReducer} from "./reducers";

export const ACTION_REMOVE_USERS_DATA='ACTION_REMOVE_USERS_DATA'
export const ACTION_SHOW_USERS_DATA='ACTION_SHOW_USERS_DATA'
export const ACTION_ADD_USERS_DATA='ACTION_ADD_USERS_DATA'
export const ACTION_ENTER_USERS_DATA='ACTION_ENTER_USERS_DATA'
export const ACTION_ADD_USERS_SURNAME='ACTION_ADD_USERS_SURNAME'
export const ACTION_ADD_USERS_NAME='ACTION_ADD_USERS_NAME'
export const ACTION_ADD_USERS_BIRTHDAY='ACTION_ADD_USERS_BIRTHDAY'
export const ACTION_ADD_USERS_PHONE='ACTION_ADD_USERS_PHONE'
export const ACTION_ADD_USERS_EMAIL='ACTION_ADD_USERS_EMAIL'
export const ACTION_ADD_USERS_LINK='ACTION_ADD_USERS_LINK'
export const ACTION_CLEAR_USERS_DATA='ACTION_CLEAR_USERS_DATA'
export const ACTION_EDIT_USERS_DATA='ACTION_CLEAR_USERS_DATA'

const reducer = combineReducers({
    usersData:usersReducer
    })

export const store = createStore(reducer)