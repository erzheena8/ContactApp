import React, {useCallback} from 'react';
import {useSelector} from "react-redux";
import {selectDataUsers} from "../../Redux/selector";
import {DataAboutUser} from "../../Components/InformationAboutUser/DataAboutUser";
import {ClearDataUserAC, useDispatch} from "../../Redux/action";

type DataAboutUserContainerType = {
    setShowDataModal: (showDataModal: boolean) => void
    showDataModal: boolean
}

export const DataAboutUserContainer: React.FunctionComponent<DataAboutUserContainerType> =
    React.memo((
        {
            setShowDataModal,
            showDataModal
        }) => {//компонента контейнер для показа информации о контакте
        const {data} = useSelector(selectDataUsers)
        const dispatch = useDispatch()

        const clearDataUser = useCallback(() => {
            dispatch(ClearDataUserAC())
        },[dispatch])

        const onCloseModal = useCallback(() => {
            setShowDataModal(false)
            clearDataUser()
        },[showDataModal, clearDataUser])

        return (
            <>
                <DataAboutUser onCloseModal={onCloseModal} user={data} showDataModal={showDataModal}/>
            </>
        )
    })