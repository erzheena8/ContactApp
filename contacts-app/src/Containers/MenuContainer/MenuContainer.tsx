import React from "react";
import {Menu} from "../../Components/Menu/Menu";
import {useSelector} from "react-redux";
import {selectDataUsers} from "../../Redux/selector";

type MenuContainer = {
    setShowAddModal: (showAddModal:boolean)=>void
}


export const MenuContainer:React.FunctionComponent<MenuContainer> = React.memo(({setShowAddModal}) => {
    const {users}=useSelector(selectDataUsers)
    let amount = users.length

    return (
        <Menu amount={amount} setShowAddModal={setShowAddModal}/>
    )
})