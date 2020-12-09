import React from 'react';
import classes from './MenuButton.module.sass';

type MenuButtonPropsType = {
    title: string
    amount?:number|'0'
}

export const MenuButton = React.memo((props: MenuButtonPropsType) => {

    return (
        <>
            <button className={classes.button}>{props.title}<span className={classes.amount}> {props.amount?props.amount:''} </span></button>
        </>
    );
})

