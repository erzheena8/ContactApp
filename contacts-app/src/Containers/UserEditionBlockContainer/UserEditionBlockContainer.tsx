import React, {useCallback, useState} from "react";
import {UserEditionBlock} from "../../Components/UserEditionBlock/UserEditionBlock";
import {AddDataUserAC, ClearDataUserAC, EnterDataUserAC, useDispatch} from "../../Redux/action";
import {useSelector} from "react-redux";
import {selectDataUsers} from "../../Redux/selector";

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
    React.FunctionComponent<UserEditionBlockContainer> = React.memo((
    {
        showModal,
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
    const {isValidationEmail,isValidationPhone} = useSelector(selectDataUsers)
    const RegExpEmail = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
    const RegExpPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){2,14}(\s*)?$/

    const [validationErrorEmail, setValidationErrorEmail] = useState<string>('')
    const [validationErrorPhone, setValidationErrorPhone] = useState<string>('')

    const dispatch = useDispatch()

    const enterDataUser = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
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
                dispatch(EnterDataUserAC(e.currentTarget.value, 'phone', RegExpPhone))
                break

            case 'email':
                dispatch(EnterDataUserAC(e.currentTarget.value, 'email', RegExpEmail))
                break

            case 'link':
                dispatch(EnterDataUserAC(e.currentTarget.value, 'link'))
                break
            default:
                break
        }
    },[dispatch])

    const onClickSaveDataUser = useCallback(() => {
        if ((name !== '' && phone !== ''&& isValidationEmail && isValidationPhone) ) {
            dispatchFunction()
            setShowModal(false)
        } else if (name === '' || phone === ''){
            setError('Данные поля необходимо заполнить')
        }
        else if ((!isValidationEmail||!isValidationPhone)&&(name !== '' || phone !== '')) {
            !isValidationEmail&&setValidationErrorEmail('Неккоректо введеное поле')
            !isValidationPhone&&setValidationErrorPhone('Неккоректо введеное поле')
        }

    },[name, phone, isValidationPhone, isValidationEmail, error, validationErrorEmail, validationErrorPhone, dispatchFunction])
    const onClickCancel = useCallback(() => {
        dispatch(ClearDataUserAC())
        setShowModal(false)
    },[dispatch, showModal])
    const onKeyPressHandler = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            onClickSaveDataUser()
        } else if (e.key === "Esc") {
            onClickCancel()
        }
    },[onClickSaveDataUser, onClickCancel])

    const clearErrorField = useCallback(() => {
        setError('')
        setValidationErrorPhone('')
        setValidationErrorEmail('')
    },[error, validationErrorPhone, validationErrorEmail])

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
                          validationErrorEmail={validationErrorEmail}
                          validationErrorPhone={validationErrorPhone}
        />
    )

})