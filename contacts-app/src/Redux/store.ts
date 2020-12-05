import React from 'react';
import {combineReducers, createStore} from 'redux'
import {usersReducer} from "./reducers";

const reducer = combineReducers({
    usersData:usersReducer
    })

export type IGlobalState = ReturnType<typeof reducer>

export const store = createStore(reducer)