import React, {useState} from 'react';
import {UserEditionBlock} from "../UserEditionBlock/UserEditionBlock";


type AddUsersPropsType = {
    setShowModal: (showModal: boolean) => void
    showModal: boolean
}

export function AddUsers(props: any) {
const [error, setError] = useState<string>('')

    const onClickCancelUserData = () => {
        props.clearUserData()
        props.setShowModal(false)
    }
    const onClickSaveUserData = () => {
        if ((props.name.length===0)||(props.phone.length===0)){
            setError('Данное поле обязательно для ввода')
        } else {
            props.addUserData()
            props.setShowModal(false)
        }
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            onClickSaveUserData()

        } else if (e.key === "Escape") {
            onClickCancelUserData()
        }
    }

    const onFocusInputElement = () => {
        setError('')
    }


    return (
        <UserEditionBlock
            showModal={props.showModal}
            onClickCancelUserData={onClickCancelUserData}
            onKeyPressHandler={onKeyPressHandler}
            surname={props.surname}
            name={props.name}
            birthday={props.birthday}
            phone={props.phone}
            email={props.email}
            link={props.link}
            addSurname={props.addSurname}
            addName={props.addName}
            addBirthday={props.addBirthday}
            addPhone={props.addPhone}
            addEmail={props.addEmail}
            addLink={props.addLink}
            error={error}
            onFocusInputElement={onFocusInputElement}
            onClickSaveUserData={onClickSaveUserData}/>
    )
}


