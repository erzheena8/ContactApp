import React from 'react';
import classes from './Header.module.sass';
import {AppBar, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {SearchInput} from "./SearchInput/SearchInput";

type HeaderPropsType = {
    setShowMenu:(showMenu:boolean)=>void
    showMenu:boolean
}

export function Header(props:HeaderPropsType) {
    return (
            <AppBar className={classes.header} style={{backgroundColor: '#626375'}} position={"fixed"}>
                    <Toolbar style={{}}>
                            <IconButton edge={'start'} color={"inherit"} aria-label={"open drawer"} onClick={()=>{props.setShowMenu(!props.showMenu)}}>
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant={'h5'} noWrap>
                                Контакты
                            </Typography>
                        <div className={classes.headerSearch}>
                            <SearchInput placeholder={'Поиск'}/>
                        </div>
                    </Toolbar>
            </AppBar>
    );
}

