import React from 'react';
import {combineReducers, createStore} from 'redux'
import {usersReducer} from "./reducers";

const reducer = combineReducers({
    usersData:usersReducer
    })

export type IGlobalState = ReturnType<typeof reducer>
//@ts-ignore
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')):{}
export const store = createStore(reducer, persistedState)

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
