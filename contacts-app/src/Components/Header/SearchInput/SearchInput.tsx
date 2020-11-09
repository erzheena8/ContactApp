import React from 'react';
import classes from './SearchInput.module.sass';
import loupe from './loupe.png'
type SearchInputPropsType = {
    placeholder:string
}

export function SearchInput(props:SearchInputPropsType) {
    return (
       <>
           <input className={classes.search} type="text" placeholder={props.placeholder} style={{backgroundImage: `url(${loupe})`}}/>
       </>
    );
}

