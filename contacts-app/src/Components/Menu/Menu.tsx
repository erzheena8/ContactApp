import React from 'react';
import classes from './Menu.module.sass';
import {Button} from "@material-ui/core";
import {MenuButton} from "./MenuButton/MenuButton";
import {connect} from "react-redux";

type MenuPropsType = {
    setShowModal: (showModal:boolean)=>void
}

export function Menu(props: any) {
    let amount = props.users.length
    const styleForButtonNewContacts = {
        backgroundColor: '#d6cdc4',
        borderRadius: '3em'
    }
    return (
        <div className={classes.menu}>
            <div className={classes.menuNewContact}>
                <Button variant={"contained"} style={styleForButtonNewContacts} onClick={()=>props.setShowModal(true)}>Новый контакт</Button>
            </div>
            <div className={classes.menuInner}>
                <div className={classes.menuButtonGroup}>
                    <MenuButton title={'Контакты'} amount={amount}/>
                    <MenuButton title={'About'}/>
                    <MenuButton title={'Back'}/>
                </div>
            </div>
        </div>
    );
}


