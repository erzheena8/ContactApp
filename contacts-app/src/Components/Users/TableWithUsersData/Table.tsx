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
    onClickRemoveUser: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
    onOpenShowModal: (showDataModal: boolean) => void
    onClickShowUser: () => void
    onClickEditUser: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void

}

export const Table = React.memo((props: TablePropsType) => {

    return (
        <tr onClick={props.onClickShowUser}>
            <td>
                <img src={user}/>
                {props.surname} {props.name}
            </td>
            <td>
                {props.phone}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                <IconButton onClick={props.onClickEditUser}>
                    <EditIcon/>
                </IconButton>
                <IconButton onClick={props.onClickRemoveUser}>
                    <Delete/>
                </IconButton>
            </td>

        </tr>
    );
})

