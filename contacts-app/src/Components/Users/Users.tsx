import React, {useState} from 'react';
import classes from './Users.module.sass';
import {Table} from "./TableWithUsersData/Table";
import {addUserData, removeUsers, setEditUser, showInformationUsers} from "../../Redux/action";
import {connect} from "react-redux";

type UsersPropsType = {
    setShowInfo: (showInfo: boolean) => void
    showMenu:boolean
    setShowEdit:(showEdit:boolean)=>void
}

export function Users(props: UsersPropsType | any) {
    const UsersData = props.users.sort((a: any, b: any) => {
        if (a.surname > b.surname) {
            return 1
        }
        if (a.surname < b.surname) {
            return -1
        }
        return 0
    }).map((u: any) => <Table key={u._id}
                              surname={u.surname}
                              name={u.name}
                              phone={u.phone}
                              email={u.email}
                              id={u._id}
                              showInformationUsers={props.showInformationUsers}
                              setShowInfo={props.setShowInfo}
                              removeUser={props.removeUsers}
                              setShowEdit={props.setShowEdit}
                              // setEditUser={props.setEditUser}
    />)
    return (
        <div className={props.showMenu?classes.users:classes.usersWithoutMenu}>
            <table className={classes.table}>
                <thead>
                <tr>
                    <th> Имя</th>
                    <th> Номер телефона</th>
                    <th> Электронная почта</th>
                </tr>
                </thead>
                <tbody>
                {UsersData}
                </tbody>
            </table>
        </div>
    );
}

const putStateToProps = (state: any) => {
    return {
        users: state.usersData.users
    }
}

const putDispatchToProps = (dispatch: any) => {
    return {
        showInformationUsers: (userId: string) => {
            dispatch(showInformationUsers(userId))
        },

        removeUsers: (userId: string) => {
            dispatch(removeUsers(userId))
        },

    //     setEditUser: (userId:string) => {
    //         dispatch(setEditUser(userId))
    // }

    }
};

export default connect(putStateToProps, putDispatchToProps)(Users)

