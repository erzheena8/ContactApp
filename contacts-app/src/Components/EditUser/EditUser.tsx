import React from 'react';
import {UserEditionBlockContainer} from "../../Containers/UserEditionBlockContainer/UserEditionBlockContainer";

type AddUsersPropsType = {
    setShowEditModal: (showEdit: boolean) => void
    surname?: string
    name?: string
    birthday?: string
    phone?: string
    email?: string
    link?: string
    showEditModal: boolean
    addEditDataUser: () => void
    error: string
    setError: (error: string) => void
}

export const EditUser: React.FunctionComponent<AddUsersPropsType> = React.memo((
    {
        setShowEditModal,
        surname,
        name,
        birthday,
        phone,
        email,
        link,
        showEditModal,
        addEditDataUser,
        error,
        setError
    }) => {

    return (
        <UserEditionBlockContainer
            showModal={showEditModal}
            surname={surname}
            name={name}
            birthday={birthday}
            phone={phone}
            email={email}
            link={link}
            setError={setError}
            setShowModal={setShowEditModal}
            error={error}
            dispatchFunction={addEditDataUser}
        />
    )
})
