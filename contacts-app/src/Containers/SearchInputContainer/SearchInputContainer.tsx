import React, {useState} from "react";
import {useSelector} from "react-redux";
import {selectDataUsers} from "../../Redux/selector";
import {SearchInput} from "../../Components/Header/SearchInput/SearchInput";
import {SearchUserAC, useDispatch} from "../../Redux/action";

type SearchInputContainerType = {
    setFilteredUsers:(filteredUsers:Array<string|undefined>)=>void
    filteredUsers:Array<string|undefined>
}


export const SearchInputContainer:React.FunctionComponent<SearchInputContainerType> = ({setFilteredUsers, filteredUsers}) => {
    const {searchInput, users}=useSelector(selectDataUsers)
    const dispatch = useDispatch()

    const onChangeSearchInput = (title:string) => {
        filteredUsersSearch()
        dispatch(SearchUserAC(title))
    }

    const filteredUsersSearch = () => {
          users.map(f=> {
            if ((f.surname.toUpperCase().includes(searchInput.toUpperCase().trim()))
                ||(f.name.toUpperCase().includes(searchInput.toUpperCase().trim()))
                ||(f.phone.toUpperCase().includes(searchInput.toUpperCase().trim()))
                ||(f.email.toUpperCase().includes(searchInput.toUpperCase().trim())))
            {
                let surname = f.surname
                console.log('array' +surname)
                // setFilteredUsers()
            }
        })
    }
    // console.log(filteredUsersSearch())

    return (
        <SearchInput searchInput={searchInput} onChangeSearchInput={onChangeSearchInput}/>
    )
}
