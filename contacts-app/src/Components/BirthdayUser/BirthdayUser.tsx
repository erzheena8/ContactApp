import React from 'react';
import classes from './BirthdayUser.module.sass';

type BirthdayUserPropsType = {
    userDate: any
}

export const BirthdayUser: React.FunctionComponent<BirthdayUserPropsType> =
    React.memo(({userDate}) => {
        return (
            <>
                <div className={classes.birthdayBlock}>
                    <div className={classes.birthdayBlockContainer}>
                        {/*Сегодня {date}*/}
                        {userDate
                            ? userDate.length > 0 && 'Сегодня день рождение у '
                            : ''}
                        {userDate
                            ? userDate.length > 0 && userDate.map((uD: any) => {
                                if (userDate[userDate.length-1]._id===uD._id)
                                {
                                    return <span key={uD._id}> {uD.surname} {uD.name}</span>

                                }
                            return <span key={uD._id}> {uD.surname} {uD.name},</span>
                        })
                            : ''}
                    </div>
                </div>
            </>
        )
    })
