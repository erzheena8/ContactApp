import React, {useCallback, useState} from "react";
import {EditUser} from "../../Components/EditUser/EditUser";
import {useSelector} from "react-redux";
import {selectDataUsers} from "../../Redux/selector";
import {AddEditDataUserAC, EditDataUserAC, useDispatch} from "../../Redux/action";

type EditUserContainerType = {
    setShowEditModal:(showEditModal:boolean)=>void
    showEditModal:boolean
}

export const EditUserContainer:React.FunctionComponent<EditUserContainerType> =
    React.memo(({setShowEditModal,showEditModal}) => {

    const {surname, name, birthday, phone, link, email} = useSelector(selectDataUsers)
    const dispatch = useDispatch()
    const [error, setError] = useState<string>('')

    const addEditDataUser = useCallback(() => {
        dispatch(AddEditDataUserAC())
    },[dispatch])
    return (
        <>
            <EditUser
                setShowEditModal={setShowEditModal}
                surname={surname}
                name={name}
                birthday={birthday}
                phone={phone}
                email={email}
                link={link}
                showEditModal={showEditModal}
                addEditDataUser={addEditDataUser}
                error={error}
                setError={setError}
            />
        </>
    )
})
