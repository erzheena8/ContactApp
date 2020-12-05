import React from 'react';
import classes from './Header.module.sass';
import {AppBar, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {SearchInputContainer} from "../../Containers/SearchInputContainer/SearchInputContainer";

type HeaderPropsType = {
    setShowMenu:(showMenuModal:boolean)=>void
    showMenuModal:boolean
    setFilteredUsers:(filteredUsers:Array<string|undefined>)=>void
    filteredUsers:Array<string|undefined>

}

export function Header(props:HeaderPropsType) {
    return (
            <AppBar className={classes.header} style={{backgroundColor: '#626375'}} position={"fixed"}>
                    <Toolbar style={{}}>
                            <IconButton edge={'start'} color={"inherit"} aria-label={"open drawer"} onClick={()=>{props.setShowMenu(!props.showMenuModal)}}>
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant={'h5'} noWrap>
                                Контакты
                            </Typography>
                        <div className={classes.headerSearch}>
                            <SearchInputContainer setFilteredUsers={props.setFilteredUsers} filteredUsers={props.filteredUsers}/>
                        </div>
                    </Toolbar>
            </AppBar>
    );
}

