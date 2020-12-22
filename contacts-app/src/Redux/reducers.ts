import React from "react";
import {v1} from "uuid";
import {ACTION_TYPE, DataUserReducerType} from "./action";

export type UsersDataType = {
    _id: string
    surname: string
    name: string
    birthday: string
    phone: string
    email: string
    link: string
    isSearch: boolean
}

export type initialStateType = {
    users: Array<UsersDataType>
    data: UsersDataType | null
    surname: string
    name: string
    birthday: string
    phone: string
    email: string
    link: string
    uId: string
    searchInput: string
    filteredUsers: Array<string | undefined>
    isValidationEmail: boolean
    isValidationPhone: boolean
}

export type reducersTypes = {
    usersData: initialStateType
}

const initialState: initialStateType = {
    users: [],
    data: null,
    uId: '',
    surname: '',
    name: '',
    birthday: '',
    phone: '',
    email: '',
    link: '',
    searchInput: '',
    filteredUsers: [],
    isValidationEmail: true,
    isValidationPhone: true

}

export const usersReducer = (state: initialStateType = initialState, action: DataUserReducerType): initialStateType => {
    switch (action.type) {
        case ACTION_TYPE.REMOVE_USER_ACTION:
            return {
                ...state,
                ...state.users,
                users: state.users.filter(u => u._id !== action.payload.userId),
                ...action.payload
            }
        case ACTION_TYPE.ENTER_DATA_USER_ACTION:
            switch (action.payload.dataset) {
                case 'surname':
                    return {
                        ...state,
                        surname: action.payload.title,
                        ...action.payload
                    }
                case 'name':
                    return {
                        ...state,
                        name: action.payload.title,
                        ...action.payload
                    }
                case 'birthday':
                    return {
                        ...state,
                        birthday: action.payload.title,
                        ...action.payload
                    }
                case 'phone':
                    return {
                        ...state,
                        phone: action.payload.title,
                        isValidationPhone: action.payload.validation.test(action.payload.title),
                        ...action.payload
                    }
                case 'email':
                    return {
                        ...state,
                        email: action.payload.title,
                        isValidationEmail: action.payload.validation.test(action.payload.title)||action.payload.title==='',
                        ...action.payload
                    }
                case 'link':
                    return {
                        ...state,
                        link: action.payload.title,
                        ...action.payload
                    }
                default:
                    return {
                        ...state,
                        ...action.payload
                    }
            }

        case ACTION_TYPE.EDIT_DATA_USER:
            return {
                ...state,
                ...state.users,
                data: state.users.filter(u => u._id === action.payload.userId)[0],
                surname: state.users.filter(u => u._id === action.payload.userId)[0].surname,
                name: state.users.filter(u => u._id === action.payload.userId)[0].name,
                birthday: state.users.filter(u => u._id === action.payload.userId)[0].birthday,
                phone: state.users.filter(u => u._id === action.payload.userId)[0].phone,
                email: state.users.filter(u => u._id === action.payload.userId)[0].email,
                link: state.users.filter(u => u._id === action.payload.userId)[0].link,
                uId: state.users.filter(u => u._id === action.payload.userId)[0]._id,

                ...action.payload
            }
        case ACTION_TYPE.CLEAR_DATA_USER:
            return {
                ...state,
                surname: '',
                name: '',
                birthday: '',
                phone: '',
                email: '',
                link: ''
            }
        case ACTION_TYPE.ADD_DATA_USER:
            return {
                ...state,
                ...state.users,
                users: [{
                    _id: v1(),
                    surname: state.surname,
                    name: state.name,
                    birthday: state.birthday,
                    phone: state.phone,
                    email: state.email,
                    link: state.link,
                    isSearch: true
                }, ...state.users],
                surname: '',
                name: '',
                birthday: '',
                phone: '',
                email: '',
                link: '',
            }
        case ACTION_TYPE.ADD_EDIT_DATA_USER:
            return {
                ...state,
                ...state.users,
                users: state.users.map(u => {
                    if (u._id === state.uId) {
                        return {
                            ...u,
                            surname: state.surname,
                            name: state.name,
                            birthday: state.birthday,
                            phone: state.phone,
                            email: state.email,
                            link: state.link,
                        }

                    }
                    return {...u}
                }),
                surname: '',
                name: '',
                birthday: '',
                phone: '',
                email: '',
                link: '',
            }
        case ACTION_TYPE.SHOW_DATA_USER_ACTION:
            return {
                ...state,
                ...state.users,
                ...state.data,
                data: state.users.filter(u => u._id === action.payload.userId)[0],
                ...action.payload
            }
        case ACTION_TYPE.SEARCH_USER:

            // console.log(action.payload.title)

            return {
                ...state,
                searchInput: action.payload.title,
                ...state.users,
                users: state.users.map(u=> {
                    if ((u.surname.toUpperCase().includes(action.payload.title.toUpperCase().trim()))
                        ||(u.name.toUpperCase().includes(action.payload.title.toUpperCase().trim()))
                        ||(u.email.toUpperCase().includes(action.payload.title.toUpperCase().trim()))
                        ||(u.phone.toUpperCase().includes(action.payload.title.toUpperCase().trim())))
                    {
                        u.isSearch = true
                    } else u.isSearch = false
                    return u
                })
            }

        default:
            return state
    }
};
