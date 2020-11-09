import React, {useRef, useState} from 'react';
import classes from './Table.module.sass';
import EditIcon from '@material-ui/icons/Edit';
import user from '../user.png'
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

type TablePropsType = {
    id: string
    surname: string
    name: string
    phone: string
    email: string
    removeUser: (userId: string) => void
    setShowInfo: (showInfo: boolean) => void
    setShowEdit:(showEdit:boolean)=>void
    setEditUser:(userId: string)=>void
    showInformationUsers: (userId: string) => void
}

export function Table(props: TablePropsType) {
    const onClickShowUserInformation = (e: React.MouseEvent<HTMLTableRowElement>) => {
        props.setShowInfo(true)
        props.showInformationUsers(props.id)

    }

    const onClickEditUser = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        props.setShowEdit(true)
        props.setEditUser(props.id)

    }

    const onClickRemoveUser = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        props.removeUser(props.id)
        props.setShowInfo(false)
    }

    return (
        <tr onClick={onClickShowUserInformation}>
            <td>
                <img src={user}/> {props.surname} {props.name}
            </td>
            <td>
                {props.phone}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                <IconButton onClick={onClickEditUser}>
                    <EditIcon/>
                </IconButton>
                <IconButton onClick={onClickRemoveUser} >
                    <Delete/>
                </IconButton>
            </td>

        </tr>
    );
}

