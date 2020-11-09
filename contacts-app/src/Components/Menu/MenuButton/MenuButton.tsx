import React from 'react';
import classes from './MenuButton.module.sass';

type MenuButtonPropsType = {
    title: string
    amount?:number
}

export function MenuButton(props: MenuButtonPropsType) {

    return (
        <>
            <button className={classes.button}>{props.title}<span className={classes.amount}> {props.amount?props.amount:''} </span></button>
        </>
    );
}

