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
    const {searchInput}=useSelector(selectDataUsers)
    const dispatch = useDispatch()

    const onChangeSearchInput = useCallback((title:string) => {
        dispatch(SearchUserAC(title))
    },[dispatch])

    return (
        <SearchInput searchInput={searchInput} onChangeSearchInput={onChangeSearchInput}/>
    )
})
