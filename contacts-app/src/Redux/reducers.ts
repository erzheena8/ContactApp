import React from "react";
import {v1} from "uuid";
import {
    ACTION_ADD_USERS_BIRTHDAY,
    ACTION_ADD_USERS_DATA,
    ACTION_ADD_USERS_EMAIL,
    ACTION_ADD_USERS_LINK,
    ACTION_ADD_USERS_NAME,
    ACTION_ADD_USERS_PHONE,
    ACTION_ADD_USERS_SURNAME,
    ACTION_CLEAR_USERS_DATA,
    ACTION_EDIT_USERS_DATA,
    ACTION_REMOVE_USERS_DATA,
    ACTION_SHOW_USERS_DATA
} from "./store";

export type UsersDataType = {
    _id:string
    surname:string
    name:string
    birthday:string
    phone:string
    email:string
    link:string
}

export type initialStateType = {
    users:Array<UsersDataType>
    data?: UsersDataType
    surname?:string
    name?: string
    birthday?: string
    phone?: string
    email?: string
    link?: string
}

export type reducersTypes = {
    usersData: initialStateType
}

type setEditUserType = {
    type:'ACTION_EDIT_USERS_DATA'
    userId:string
}

type showInformationUsersType = {
    type:'ACTION_SHOW_USERS_DATA'
    payload:string
}
type removeUsersType = {
    type:'ACTION_REMOVE_USERS_DATA'
    id:string
}
type addDataType = {
    type:'ACTION_ADD_USERS_SURNAME'|'ACTION_ADD_USERS_NAME'|'ACTION_ADD_USERS_BIRTHDAY'|'ACTION_ADD_USERS_PHONE'|'ACTION_ADD_USERS_EMAIL'|'ACTION_ADD_USERS_LINK'
    title:string
}
type changeDataUserType = {
    type:'ACTION_CLEAR_USERS_DATA'|'ACTION_ADD_USERS_DATA'
}

export type actionType = showInformationUsersType|removeUsersType|addDataType|setEditUserType|changeDataUserType

const initialState:initialStateType = {
    users:
        [{
        _id: v1(),
        surname: 'Холодкова',
        name: 'Дивора',
        birthday: '21.04.1973',
        phone: '+7(999)657-42-32',
        email: 'holodkova@mail.com',
        link: 'id32445'
    },
        {
    _id: v1(),
        surname: 'Реплин',
    name: 'Лемарк',
    birthday: '14.07.1985',
    phone: '+7(961)971-02-42',
    email: 'replin@mail.mail',
    link: 'id17220'
},
        {
    _id: v1(),
        surname: 'Белова',
    name: 'Синай',
    birthday: '30.07.1988',
    phone: '+7(948)983-32-44',
    email: 'belova@mail.mail',
    link: 'id17512'
},
        {
    _id: v1(),
        surname: 'Соболев',
    name: 'Никита',
    birthday: '21.11.1969',
    phone: '+7(913)460-90-01',
    email: 'sobolev@mail.mail',
    link: 'id163720'
},
        {
    _id: v1(),
        surname: 'Андреев',
    name: 'Александр',
    birthday: '12.01.2000',
    phone: '+7(983)352-11-60',
    email: '',
    link: ''
},
        {
    _id: v1(),
        surname: 'Лобанов',
    name: 'Николай',
    birthday: '26.11.1999',
    phone: '+7(928)668-08-44',
    email: 'lobanov@mail.mail',
    link: ''
},
        {
    _id: v1(),
    surname: 'Ермолаев',
    name: 'Павел',
    birthday: '10.10.1993',
    phone: '+7(906)196-46-23',
    email: 'pavel@mail.mail',
    link: 'id24572'
},],

data:       {
        _id:'',
        surname:'',
        name:'',
        birthday:'',
        phone:'',
        email:'',
        link:''
    },

        surname: '',
        name: '',
        birthday: '',
        phone: '',
        email: '',
        link: '',


}

export const usersReducer = (state:initialStateType=initialState, action:actionType) => {
    switch (action.type) {
        case ACTION_EDIT_USERS_DATA:
            console.log()
            // const editUser = state.users.find(edit=>edit._id===action.usersId)
            // if (editUser){
        {
            return {
                ...state,
                // editUser: editUser
            }}
            return {
                ...state,
                users:state.users
            }
        case ACTION_REMOVE_USERS_DATA:
            return {
                ...state,
                ...state.users,
                users:state.users.filter(u=>u._id!==action.id)
            }

        case ACTION_SHOW_USERS_DATA:
            const finedUser = state.users.find(data=>data._id===action.payload)
            if (finedUser){
            return {
                ...state,
                data: finedUser
            }}
            return {
                ...state,
                users:state.users
            }
        case ACTION_ADD_USERS_SURNAME:
            return {
                ...state, surname:action.title
        }
        case ACTION_ADD_USERS_NAME:
            return {
                ...state, name:action.title
        }
        case ACTION_ADD_USERS_BIRTHDAY:
            return {
                ...state, birthday:action.title
        }
        case ACTION_ADD_USERS_PHONE:
            return {
                ...state, phone:action.title
        }
        case ACTION_ADD_USERS_EMAIL:
            return {
                ...state, email:action.title
        }
        case ACTION_ADD_USERS_LINK:
            return {
                ...state, link:action.title
        }
        case ACTION_CLEAR_USERS_DATA:
            return {
                ...state,
                surname:'',
                name:'',
                birthday:'',
                phone:'',
                email:'',
                link:''
        }
        case ACTION_ADD_USERS_DATA:
            const newUser = {
                _id: v1(),
                surname:state.surname,
                name: state.name,
                birthday: state.birthday,
                phone: state.phone,
                email: state.email,
                link: state.link,
            }
            return{
                ...state,
                users: [...state.users,newUser ],
                surname:'',
                name:'',
                birthday:'',
                phone:'',
                email:'',
                link:''
            }


        default:
            return state
    }
};