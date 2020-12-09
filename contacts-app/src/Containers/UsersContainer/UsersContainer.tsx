import React, {useCallback} from 'react';
import {Users} from "../../Components/Users/Users";
import {useSelector} from "react-redux";
import {selectDataUsers} from "../../Redux/selector";
import {Table} from "../../Components/Users/TableWithUsersData/Table";
import {UsersDataType} from "../../Redux/reducers";
import {EditDataUserAC, RemoveDataUserAC, ShowDataUserAC, useDispatch} from "../../Redux/action";

type UsersContainerType = {
    setShowDataModal:(showDataModal:boolean)=>void
    setShowEditModal:(showEditModal:boolean)=>void
}

export const UsersContainer: React.FunctionComponent<UsersContainerType> = React.memo(({setShowDataModal, setShowEditModal}) => { //компонента контейнер для отрисовки контактов
    const {users} = useSelector(selectDataUsers)
    const dispatch = useDispatch()

    const removeDataUser = useCallback((userId:string) => {
        dispatch(RemoveDataUserAC(userId))
    },[dispatch])
    const showDataUser = useCallback((userId:string) => {
        dispatch(ShowDataUserAC(userId))
    },[dispatch])
    const editDataUser = useCallback((userId:string) => {
        dispatch(EditDataUserAC(userId))
    },[dispatch])

    const SortUsersData = users.sort((a: UsersDataType, b: UsersDataType) => {
        if (a.surname > b.surname) {
            return 1
        }
        if (a.surname < b.surname) {
            return -1
        }
        return 0
    }).map(u => {
        const onClickRemoveUser = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
            e.stopPropagation()
            removeDataUser(u._id)
        }
        const onClickShowUser = () => {
            showDataUser(u._id)
            setShowDataModal(true)
        }
        const onClickEditUser = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
            e.stopPropagation()
            editDataUser(u._id)
            setShowEditModal(true)
        }

       return  <Table   key={u._id}
                        id={u._id}
                        surname={u.surname}
                        name={u.name}
                        phone={u.phone}
                        email={u.email}
                        onClickRemoveUser={onClickRemoveUser}
                        onOpenShowModal={setShowDataModal}
                        onClickShowUser={onClickShowUser}
                        onClickEditUser={onClickEditUser}/>})
    return (
    <>
        <Users
            UsersData={SortUsersData}/>
    </>
    )
})