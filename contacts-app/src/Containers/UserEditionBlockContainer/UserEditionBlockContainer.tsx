import React from "react";
import {UserEditionBlock} from "../../Components/UserEditionBlock/UserEditionBlock";
import {AddDataUserAC, ClearDataUserAC, EnterDataUserAC, useDispatch} from "../../Redux/action";

type UserEditionBlockContainer = {
    showModal: boolean
    surname?: string
    name?: string
    birthday?: string
    phone?: string
    email?: string
    link?: string
    error: string
    setError: (error: string) => void
    setShowModal: (showModal: boolean) => void
    dispatchFunction: () => void
}

export const UserEditionBlockContainer:
    React.FunctionComponent<UserEditionBlockContainer> = (
        {   showModal,
            surname,
            name,
            birthday,
            phone,
            email,
            link,
            error,
            setError,
            setShowModal,
            dispatchFunction
        }) => {

    const dispatch = useDispatch()

    const enterDataUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.currentTarget.dataset.name) {
            case 'surname':
                dispatch(EnterDataUserAC(e.currentTarget.value, 'surname'))
                break
            case 'name':
                dispatch(EnterDataUserAC(e.currentTarget.value, 'name'))
                break

            case 'birthday':
                dispatch(EnterDataUserAC(e.currentTarget.value, 'birthday'))
                break

            case 'phone':
                dispatch(EnterDataUserAC(e.currentTarget.value, 'phone'))
                break

            case 'email':
                dispatch(EnterDataUserAC(e.currentTarget.value, 'email'))
                break

            case 'link':
                dispatch(EnterDataUserAC(e.currentTarget.value, 'link'))
                break
            default:
                break
        }
    }

    const onClickSaveDataUser = () => {
        if (name === '' && phone === '') {
            setError('Данное поле необходимо заполнить')
        } else {
            dispatchFunction()
            setShowModal(false)
        }
    }
    const onClickCancel = () => {
        dispatch(ClearDataUserAC())
        setShowModal(false)
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            onClickSaveDataUser()
        } else if (e.key === "Esc") {
            onClickCancel()
        }
    }

    const clearErrorField = () => {
        setError('')
    }

    return (
        <UserEditionBlock showModal={showModal}
                          surname={surname}
                          name={name}
                          birthday={birthday}
                          phone={phone}
                          email={email}
                          link={link}
                          onChangeDataUser={enterDataUser}
                          onClickSaveDataUser={onClickSaveDataUser}
                          onClickCancel={onClickCancel}
                          error={error}
                          clearErrorField={clearErrorField}
                          onKeyPressHandler={onKeyPressHandler}
        />
    )

}