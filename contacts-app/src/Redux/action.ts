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
    ACTION_ENTER_USERS_DATA,
    ACTION_REMOVE_USERS_DATA,
    ACTION_SHOW_USERS_DATA
} from "./store";


export const showInformationUsers = (userId:string) => {
    return {
        type: ACTION_SHOW_USERS_DATA,
        payload: userId
    }
}

export const setEditUser = (userId:string) => {
    return {
        type: ACTION_EDIT_USERS_DATA,
        userId:userId
    }
}

export const removeUsers = (userId:string) =>{
        return {
            type: ACTION_REMOVE_USERS_DATA,
            id: userId
        }
}

export const addSurname = (title:string) => {
        return {
            type: ACTION_ADD_USERS_SURNAME,
            title:title
        }
}
export const addName = (title:string) => {
        return {
            type: ACTION_ADD_USERS_NAME,
            title:title
        }
}
export const addBirthday = (title:string) => {
        return {
            type: ACTION_ADD_USERS_BIRTHDAY,
            title:title
        }
}
export const addPhone = (title:string) => {
        return {
            type: ACTION_ADD_USERS_PHONE,
            title:title
        }
}
export const addEmail = (title:string) => {
        return {
            type: ACTION_ADD_USERS_EMAIL,
            title:title
        }
}
export const addLink = (title:string) => {
        return {
            type: ACTION_ADD_USERS_LINK,
            title:title
        }
}
export const addUserData = () => {
        return {
            type: ACTION_ADD_USERS_DATA,
        }
}
export const clearUserData = () => {
        return {
            type: ACTION_CLEAR_USERS_DATA,
        }
}


