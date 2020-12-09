import React, {useCallback, useState} from "react";
import {useSelector} from "react-redux";
import {selectDataUsers} from "../../Redux/selector";
import {SearchInput} from "../../Components/Header/SearchInput/SearchInput";
import {SearchUserAC, useDispatch} from "../../Redux/action";

type SearchInputContainerType = {
    setFilteredUsers:(filteredUsers:Array<string|undefined>)=>void
    filteredUsers:Array<string|undefined>
}


export const SearchInputContainer:React.FunctionComponent<SearchInputContainerType> = React.memo(({setFilteredUsers, filteredUsers}) => {
    const {searchInput, users}=useSelector(selectDataUsers)
    const dispatch = useDispatch()

    const filteredUsersSearch = () => {
          users.map(f=> {
            if ((f.surname.toUpperCase().includes(searchInput.toUpperCase().trim()))
                ||(f.name.toUpperCase().includes(searchInput.toUpperCase().trim()))
                ||(f.phone.toUpperCase().includes(searchInput.toUpperCase().trim()))
                ||(f.email.toUpperCase().includes(searchInput.toUpperCase().trim())))
            {
                let surname = f.surname
            }
        })
    }
    const onChangeSearchInput = useCallback((title:string) => {
        filteredUsersSearch()
        dispatch(SearchUserAC(title))
    },[filteredUsersSearch, dispatch])

    return (
        <SearchInput searchInput={searchInput} onChangeSearchInput={onChangeSearchInput}/>
    )
})
