import React from 'react';
import classes from './Menu.module.sass';
import {Button} from "@material-ui/core";
import {MenuButton} from "./MenuButton/MenuButton";
import {BirthdayUserContainer} from "../../Containers/BirthdayUserContainer/BirthdayUserContainer";

type MenuPropsType = {
    setShowAddModal: (showAddModal:boolean)=>void
    amount: number
}

export function Menu(props: MenuPropsType) {
    const styleForButtonNewContacts = {
        backgroundColor: '#d6cdc4',
        borderRadius: '3em'
    }
    return (
        <div className={classes.menu}>
            <div className={classes.menuNewContact}>
                <Button variant={"contained"} style={styleForButtonNewContacts} onClick={()=>props.setShowAddModal(true)}>Новый контакт</Button>
            </div>
            <div className={classes.menuInner}>
                <div className={classes.menuButtonGroup}>
                    <MenuButton title={'Контакты'}
                                amount={props.amount?props.amount:'0'}
                    />
                    <MenuButton title={'About'}/>
                    <MenuButton title={'Back'}/>
                </div>
            </div>
            <BirthdayUserContainer/>
        </div>
    );
}


