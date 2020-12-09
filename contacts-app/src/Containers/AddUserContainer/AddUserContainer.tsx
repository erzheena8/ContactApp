import React, {useCallback, useState} from "react";
import {AddUsers} from "../../Components/AddUsers/AddUsers";
import {useSelector} from "react-redux";
import {selectDataUsers} from "../../Redux/selector";
import {AddDataUserAC, useDispatch} from "../../Redux/action";

type AddUserContainer = {
    setShowAddModal: (showAddModal: boolean) => void
    showAddModal: boolean
}


export const AddUserContainer: React.FunctionComponent<AddUserContainer> =
    React.memo(({
                    setShowAddModal,
                    showAddModal
    }) => {
    const [error, setError] = useState<string>('')

    const {surname, name, birthday, phone, email, link} = useSelector(selectDataUsers)
    const dispatch = useDispatch()
    const addDataUser = useCallback(() => {
        dispatch(AddDataUserAC())
    },[dispatch])

    return (
        <AddUsers
            showAddModal={showAddModal}
            surname={surname}
            name={name}
            birthday={birthday}
            phone={phone}
            email={email}
            link={link}
            error={error}
            addDataUser={addDataUser}
            setError={setError}
            setShowAddModal={setShowAddModal}
        />
    )
})





