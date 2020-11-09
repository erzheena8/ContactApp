import React, {useState} from 'react';
import {UserEditionBlock} from "../UserEditionBlock/UserEditionBlock";



type AddUsersPropsType = {
    setShowEdit: (showEdit: boolean) => void
    showEdit: boolean
}

export function EditUser(props: any) {
    // const [error, setError] = useState<string>('')
    //
    // const onClickCancelUserData = () => {
    //     props.clearUserData()
    //     props.setShowModal(false)
    // }
    // const onClickSaveUserData = () => {
    //     if ((props.name.length===0)||(props.phone.length===0)){
    //         setError('Данное поле обязательно для ввода')
    //     } else {
    //         props.addUserData()
    //         props.setShowModal(false)
    //     }
    // }
    //
    // const onKeyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    //     if (e.key === 'Enter') {
    //         onClickSaveUserData()
    //
    //     } else if (e.key === "Escape") {
    //         onClickCancelUserData()
    //     }
    // }
    //
    // const onFocusInputElement = () => {
    //     setError('')
    // }


    return (

        <UserEditionBlock
            showModal={props.showEdit}
            onClickCancelUserData={()=>{}}
            onKeyPressHandler={()=>{}}
            surname={'props.surname'}
            name={'props.name'}
            birthday={'props.birthday'}
            phone={'props.phone'}
            email={'props.email'}
            link={'props.link'}
            addSurname={()=>{}}
            addName={()=>{}}
            addBirthday={()=>{}}
            addPhone={()=>{}}
            addEmail={()=>{}}
            addLink={()=>{}}
            error={'error'}
            onFocusInputElement={()=>{}}
            onClickSaveUserData={()=>{}}/>
    )
}
