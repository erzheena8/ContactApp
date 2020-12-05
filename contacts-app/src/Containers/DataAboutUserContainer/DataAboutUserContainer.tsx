import React from 'react';
import {useSelector} from "react-redux";
import {selectDataUsers} from "../../Redux/selector";
import {DataAboutUser} from "../../Components/InformationAboutUser/DataAboutUser";
import {ClearDataUserAC, useDispatch} from "../../Redux/action";

type DataAboutUserContainerType = {
    setShowDataModal:(showDataModal:boolean)=>void
    showDataModal:boolean
}

export const DataAboutUserContainer: React.FunctionComponent<DataAboutUserContainerType> = (
    {
        setShowDataModal,
        showDataModal
    }) => {//компонента контейнер для показа информации о контакте
    const {data} = useSelector(selectDataUsers)
    const dispatch = useDispatch()

    const clearDataUser = () => {
        dispatch(ClearDataUserAC())
    }

    const onCloseModal = () => {
        setShowDataModal(false)
        clearDataUser()
    }

    return (
        <>
         <DataAboutUser onCloseModal={onCloseModal} user={data} showDataModal={showDataModal}/>
        </>
    )
}