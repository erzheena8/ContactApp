import React, {useCallback} from 'react';
import {useSelector} from "react-redux";
import {selectDataUsers} from "../../Redux/selector";
import {DataAboutUser} from "../../Components/InformationAboutUser/DataAboutUser";
import {ClearDataUserAC, EditDataUserAC, RemoveDataUserAC, ShowDataUserAC, useDispatch} from "../../Redux/action";

type DataAboutUserContainerType = {
    setShowDataModal: (showDataModal: boolean) => void
    showDataModal: boolean
    setShowEditModal: (showEditModal:boolean)=> void
}

export const DataAboutUserContainer: React.FunctionComponent<DataAboutUserContainerType> =
    React.memo((
        {
            setShowDataModal,
            showDataModal,
            setShowEditModal
        }) => {//компонента контейнер для показа информации о контакте
        const {data} = useSelector(selectDataUsers)
        const dispatch = useDispatch()
        let id = data?data._id:''
        const removeDataUser = useCallback((userId:string) => {
            dispatch(RemoveDataUserAC(userId))
        },[dispatch])

        const editDataUser = useCallback((userId:string) => {
            dispatch(EditDataUserAC(userId))
        },[dispatch])
        const onClickEditUser = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
            e.stopPropagation()
            editDataUser(id)
            setShowEditModal(true)
            setShowDataModal(false)
        }
        const onClickRemoveUser = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
            e.stopPropagation()
            removeDataUser(id)
            setShowDataModal(false)

        }
        const clearDataUser = useCallback(() => {
            dispatch(ClearDataUserAC())
        },[dispatch])

        const onCloseModal = useCallback(() => {
            setShowDataModal(false)
            clearDataUser()
        },[showDataModal, clearDataUser])

        return (
            <>
                <DataAboutUser
                    user={data}
                    onCloseModal={onCloseModal}
                    showDataModal={showDataModal}
                    onClickEditUser={onClickEditUser}
                    onClickRemoveUser={onClickRemoveUser}
                />
            </>
        )
    })