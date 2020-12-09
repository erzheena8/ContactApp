import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {selectDataUsers} from "../../Redux/selector";
import {BirthdayUser} from "../../Components/BirthdayUser/BirthdayUser";
import {UsersDataType} from "../../Redux/reducers";

type BirthdayUserContainerType = {

}

export const BirthdayUserContainer: React.FunctionComponent<BirthdayUserContainerType> = React.memo((
    {

    }) => {//компонента контейнер для показа информации о контакте
    const {users} = useSelector(selectDataUsers)
    const [userDate, setUserDate] = useState<Array<UsersDataType>>([])
    const date = new Date()
    useEffect(() => {
        const bU = users.filter(b =>
        date.getDate() === new Date(b.birthday).getDate()
        && date.getMonth() === new Date(b.birthday).getMonth())

        setUserDate([...bU])


    }, [users, date.getMonth(), date.getDate()])
    // useEffect(() => {
    //     const bUT = users.filter(b =>
    //     date.getDate()+1 === new Date(b.birthday).getDate()+1
    //     && date.getMonth() === new Date(b.birthday).getMonth())
    //
    //     setUserDateTomorrow([...bUT])
    //
    //
    // }, [users])

    return (
        <BirthdayUser userDate={userDate}/>

    )
})