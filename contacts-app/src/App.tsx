import React, {useState} from 'react';
import './App.sass';
import {Header} from "./Components/Header/Header";
import Users from "./Components/Users/Users";
import DataAboutUser from "./Components/InformationAboutUser/DataAboutUser";
import AddUserContainer from "./Components/AddUsers/AddUserContainer";
import MenuContainer from "./Components/Menu/MenuContainer";
import EditUserContainer from "./Components/EditUser/EditUserContainer";


function App() {
    const [showInfo, setShowInfo] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showEdit, setShowEdit] = useState<boolean>(false)
    const [showMenu, setShowMenu] = useState<boolean>(true)
    return (
        <div className={'App'}>

            {showInfo && <DataAboutUser setShowInfo={setShowInfo} showInfo={showInfo}/>}
            {showModal && <AddUserContainer setShowModal={setShowModal} showModal={showModal}/>}
            {showEdit && <EditUserContainer setShowEdit={setShowEdit} showEdit={showEdit}/>}

            <Header setShowMenu={setShowMenu} showMenu={showMenu}/>
            <div className="content">
                {showMenu&&<MenuContainer setShowModal={setShowModal}/>}
                <Users setShowInfo={setShowInfo} showMenu={showMenu} setShowEdit={setShowEdit}/>
            </div>
        </div>
    );
}

export default App;
