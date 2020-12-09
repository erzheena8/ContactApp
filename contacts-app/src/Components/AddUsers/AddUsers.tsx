import React from 'react';
import {UserEditionBlockContainer} from "../../Containers/UserEditionBlockContainer/UserEditionBlockContainer";


type AddUsersPropsType = {
    showAddModal: boolean
    surname:string
    name:string
    birthday:string
    phone:string
    email:string
    link:string
    error:string
    addDataUser:()=>void
    setError:(error:string)=>void
    setShowAddModal:(showAddModal:boolean)=>void
}

export const AddUsers:React.FunctionComponent<AddUsersPropsType> = React.memo((
    {   showAddModal,
        surname,
        name,
        birthday,
        phone,
        email,
        link,
        addDataUser,
        error,
        setError,
        setShowAddModal
})=>{
    return (
        <UserEditionBlockContainer
            showModal={showAddModal}
            setShowModal={setShowAddModal}
            surname={surname}
            name={name}
            birthday={birthday}
            phone={phone}
            email={email}
            link={link}
            error={error}
            setError={setError}
            dispatchFunction={addDataUser}
        />
    )
})


