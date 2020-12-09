import {useDispatch as _useDispatch} from 'react-redux';


export enum ACTION_TYPE {
    REMOVE_USER_ACTION = 'ContactsApp/REMOVE_USER_ACTION', //удаление контакта
    SHOW_DATA_USER_ACTION = 'ContactsApp/SHOW_DATA_USER_ACTION', //показывает информацию о контакте
    ENTER_DATA_USER_ACTION = 'ContactsApp/ENTER_DATA_USER_ACTION', //заполняет данные контакта
    EDIT_DATA_USER = 'ContactsApp/EDIT_DATA_USER', //изменение данных контакта
    ADD_DATA_USER = 'ContactsApp/ADD_DATA_USER', //добавляет данные нового контакта
    CLEAR_DATA_USER = 'ContactsApp/CLEAR_DATA_USER', //отчищает данные контакта при нажатии отмена
    ADD_EDIT_DATA_USER = 'ContactsApp/ADD_EDIT_DATA_USER', //
    SEARCH_USER = 'ContactsApp/SEARCH_USER', //

}

export type RemoveDataUserType = {
    type: ACTION_TYPE.REMOVE_USER_ACTION
    payload: {
        userId: string
    }
}
export type SearchUserType = {
    type: ACTION_TYPE.SEARCH_USER,
    payload: {
        title:string
    }

}

export type ShowDataUserType = {
    type: ACTION_TYPE.SHOW_DATA_USER_ACTION
    payload: {
        userId: string
    }
}

export type EnterDataUserType = {
    type: ACTION_TYPE.ENTER_DATA_USER_ACTION
    payload: {
        title: string
        dataset: string
        validation?: any
    }
}

export type EditDataUserType = {
    type: ACTION_TYPE.EDIT_DATA_USER
    payload: {
        userId: string
    }
}
export type AddDataUserType = {
    type: ACTION_TYPE.ADD_DATA_USER

}
export type ClearDataUserType = {
    type: ACTION_TYPE.CLEAR_DATA_USER

}
export type AddEditDataUserType = {
    type: ACTION_TYPE.ADD_EDIT_DATA_USER
}


export const RemoveDataUserAC = (userId: string): RemoveDataUserType => {
    return {
        type: ACTION_TYPE.REMOVE_USER_ACTION,
        payload: {
            userId
        }
    }
}
export const AddEditDataUserAC = (): AddEditDataUserType => {
    return {
        type: ACTION_TYPE.ADD_EDIT_DATA_USER,

    }
}
export const AddDataUserAC = (): AddDataUserType => {
    return {
        type: ACTION_TYPE.ADD_DATA_USER,

    }
}
export const ClearDataUserAC = (): ClearDataUserType => {
    return {
        type: ACTION_TYPE.CLEAR_DATA_USER,

    }
}

export const ShowDataUserAC = (userId: string): ShowDataUserType => {
    return {
        type: ACTION_TYPE.SHOW_DATA_USER_ACTION,
        payload: {
            userId
        }
    }
}
export const EnterDataUserAC = (title: string, dataset: string, validation?:any): EnterDataUserType => {
    return {
        type: ACTION_TYPE.ENTER_DATA_USER_ACTION,
        payload: {
            title,
            dataset,
            validation
        }
    }
}
export const EditDataUserAC = (userId: string): EditDataUserType => {
    return {
        type: ACTION_TYPE.EDIT_DATA_USER,
        payload: {
            userId
        }
    }
}
export const SearchUserAC = (title:string): SearchUserType => {
    return {
        type: ACTION_TYPE.SEARCH_USER,
        payload: {
            title,
        }
    }
}


export type DataUserReducerType =
    | RemoveDataUserType
    | ShowDataUserType
    | EnterDataUserType
    | EditDataUserType
    | AddDataUserType
    | ClearDataUserType
    | AddEditDataUserType
    | SearchUserType

export function useDispatch() {
    const dispatch = _useDispatch()
    return (ac: DataUserReducerType) => dispatch(ac)
}




