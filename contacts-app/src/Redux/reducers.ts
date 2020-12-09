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
}

export type reducersTypes = {
    usersData: initialStateType
}

const initialState: initialStateType = {
    users:
        [{
            _id: v1(),
            surname: 'Холодкова',
            name: 'Дивора',
            birthday: '1973-04-21',
            phone: '+7(999)657-42-32',
            email: 'holodkova@mail.com',
            link: 'id32445'
        },
            {
                _id: v1(),
                surname: 'Реплин',
                name: 'Лемарк',
                birthday: '1985-12-09',
                phone: '+7(961)971-02-42',
                email: 'replin@mail.mail',
                link: 'id17220'
            },
            {
                _id: v1(),
                surname: 'Белова',
                name: 'Синай',
                birthday: '1988-12-08',
                phone: '+7(948)983-32-44',
                email: 'belova@mail.mail',
                link: 'id17512'
            },
            {
                _id: v1(),
                surname: 'Соболев',
                name: 'Никита',
                birthday: '1969-11-21',
                phone: '+7(913)460-90-01',
                email: 'sobolev@mail.mail',
                link: 'id163720'
            },
            {
                _id: v1(),
                surname: 'Андреев',
                name: 'Александр',
                birthday: '2000-01-12',
                phone: '+7(983)352-11-60',
                email: '',
                link: ''
            },
            {
                _id: v1(),
                surname: 'Лобанов',
                name: 'Николай',
                birthday: '1999-12-06',
                phone: '+7(928)668-08-44',
                email: 'lobanov@mail.mail',
                link: ''
            },
            {
                _id: v1(),
                surname: 'Ермолаев',
                name: 'Павел',
                birthday: '1993-12-03',
                phone: '+7(906)196-46-23',
                email: 'pavel@mail.mail',
                link: 'id24572'
            },],
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
            console.log(state.surname)
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
                        ...action.payload
                    }
                case 'email':
                    return {
                        ...state,
                        email: action.payload.title,
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
                    link: state.link
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
            return {
                ...state,
                searchInput: action.payload.title,
            }
        default:
            return state
    }
};
