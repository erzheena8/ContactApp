import React, {useState} from 'react';
import './App.sass';
import {Header} from "./Components/Header/Header";
import {MenuContainer} from './Containers/MenuContainer/MenuContainer'
import {UsersContainer} from "./Containers/UsersContainer/UsersContainer";
import {DataAboutUserContainer} from "./Containers/DataAboutUserContainer/DataAboutUserContainer";
import {AddUserContainer} from "./Containers/AddUserContainer/AddUserContainer";
import {EditUserContainer} from "./Containers/EditUserContainer/EditUserContainer";


function App() {
    const [showDataModal, setShowDataModal] = useState<boolean>(false)
    const [showAddModal, setShowAddModal] = useState<boolean>(false)
    const [showEditModal, setShowEditModal] = useState<boolean>(false)
    const [showMenuModal, setShowMenuModal] = useState<boolean>(true)

    const [filteredUsers, setFilteredUsers] = useState<Array<string|undefined>>([])

    const d = '2020-12-5'
    const date = new Date()
    const date2 = new Date(d)
    console.log(date2)
    if (date.getDate()===date2.getDate()&&date.getMonth()===date2.getMonth()&&date.getFullYear()===date2.getFullYear()) {
        console.log(true)
    } else console.log(false)

    return (
        <div className={'App'}>
            {showDataModal && <DataAboutUserContainer setShowDataModal={setShowDataModal} showDataModal={showDataModal}/>}
            {showAddModal && <AddUserContainer setShowAddModal={setShowAddModal} showAddModal={showAddModal}/>}
            {showEditModal && <EditUserContainer setShowEditModal={setShowEditModal} showEditModal={showEditModal}/>}

            <Header setShowMenu={setShowMenuModal} showMenuModal={showMenuModal} setFilteredUsers={setFilteredUsers} filteredUsers={filteredUsers}/>
            <div className="content">
                {showMenuModal&&<MenuContainer setShowAddModal={setShowAddModal}/>}
                <UsersContainer setShowDataModal={setShowDataModal} setShowEditModal={setShowEditModal}/>
            </div>
        </div>
    );
}

export default App;
