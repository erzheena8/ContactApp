import React, {useState} from 'react';
import classes from './Users.module.sass';

type UsersPropsType = {
    UsersData: Array<any>
}

export const Users: React.FunctionComponent<UsersPropsType> =
    ({
         UsersData
     }) => {

        return (
            <div className={classes.users}>
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


