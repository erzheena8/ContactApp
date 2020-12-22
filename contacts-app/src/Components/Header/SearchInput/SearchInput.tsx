import React, {ChangeEvent} from 'react';
import classes from './SearchInput.module.sass';
import loupe from './loupe.png'

type SearchInputPropsType = {
    searchInput: string
    onChangeSearchInput: (title: string) => void
}

export const SearchInput = React.memo((props: SearchInputPropsType) => {
        const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
            props.onChangeSearchInput(e.currentTarget.value)
        }
        return (
            <>
                <input
                    className={classes.search}
                    type="text"
                    placeholder={'Поиск'}
                    style={{backgroundImage: `url(${loupe})`}}
                    value={props.searchInput}
                    onChange={onChangeInput}/>
            </>
        );
    }
)

