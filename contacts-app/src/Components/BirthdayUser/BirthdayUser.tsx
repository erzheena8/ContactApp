import React from 'react';
import classes from './BirthdayUser.module.sass';

type BirthdayUserPropsType = {
    userDate: any
}

export const BirthdayUser: React.FunctionComponent<BirthdayUserPropsType> =
    ({userDate}) => {
        return (
            <>
                <div className={classes.birthdayBlock}>
                    <div className={classes.birthdayBlockContainer}>
                        {/*Сегодня {date}*/}
                        {userDate
                            ?userDate.length > 0&&'Сегодня день рождение у '
                            :'' }
                        {userDate
                            ?userDate.length > 0&&userDate.map((uD: any) => {
                            return <span key={uD._id}>{uD.surname} {uD.name},</span>
                        })
                        :''}
                        {/*{userDateTomorrow*/}
                        {/*    ?userDateTomorrow.length > 0&&'Завтра день рождение у '*/}
                        {/*    :'' }*/}
                        {/*{userDateTomorrow*/}
                        {/*    ?userDateTomorrow.length > 0&&userDateTomorrow.map((uD: any) => {*/}
                        {/*    return <span key={uD._id}>{uD.surname} {uD.name},</span>*/}
                        {/*})*/}
                        {/*:''}*/}

                </div>
            </div>
        </>
    )
}
