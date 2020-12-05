import React, {useState} from 'react';
import {UserEditionBlockContainer} from "../../Containers/UserEditionBlockContainer/UserEditionBlockContainer";


type AddUsersPropsType = {
    // setShowModal: (showModal: boolean) => void
    showAddModal: boolean
    surname:string
    name:string
    birthday:string
    phone:string
    email:string
    link:string
    error:string
    // enterDataUser:(e:React.ChangeEvent<HTMLInputElement>)=>void
    addDataUser:()=>void
    // clearDataUser:()=>void
    setError:(error:string)=>void
    setShowAddModal:(showAddModal:boolean)=>void
}

export const AddUsers:React.FunctionComponent<AddUsersPropsType> = (
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
}


