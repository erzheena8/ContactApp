import React from 'react';
import classes from './DataAboutUser.module.sass';
import calendar from './icons/calendar.png'
import phone from './icons/phone-call.png'
import email from './icons/email.png'
import {Backdrop, Fade, IconButton, Modal} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {Delete} from "@material-ui/icons";
import ClearIcon from '@material-ui/icons/Clear';
import {UsersDataType} from "../../Redux/reducers";

type DataAboutUserPropsType = {
    onCloseModal: () => void
    showDataModal: boolean
    user: UsersDataType | null
}

export const DataAboutUser: React.FunctionComponent<DataAboutUserPropsType> = ({onCloseModal, showDataModal, user}) => {
    const styleModalWindow = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <Modal open={showDataModal}
               onClose={onCloseModal}
               closeAfterTransition
               onKeyPress={(event) => {
                   if (event.key === 'Enter' || event.key === 'Escape') {
                       onCloseModal()
                   }
               }}
               BackdropComponent={Backdrop}
               BackdropProps={{
                   timeout: 500,
               }}
               className={classes.mainModal}
               style={styleModalWindow}>
            <Fade in={showDataModal}>
                <div className={classes.information} style={{opacity: '1', visibility: 'visible', outline: 'none'}}>
                    <div className={classes.informationInner}>
                        <div className={classes.informationHead}>
                            <div className={classes.titleHead}> {user?.surname} {user?.name} </div>
                            <div className={classes.buttonGroup}>
                                <IconButton>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton>
                                    <Delete/>
                                </IconButton>
                                <IconButton onClick={onCloseModal}>
                                    <ClearIcon/>
                                </IconButton>
                            </div>
                        </div>
                        <div className={classes.titleBody}>Данные контакта</div>

                        <div className={classes.informationBody}>
                            {user?.birthday && <div className={classes.itemBody}><img src={calendar}/> <span
                                className={classes.dataUsers}>{user?.birthday}</span></div>}
                            {user?.phone && <div className={classes.itemBody}><img src={phone}/> <span
                                className={classes.dataUsers}>{user?.phone}</span></div>}
                            {user?.email && <div className={classes.itemBody}><img src={email}/> <span
                                className={classes.dataUsers}>{user?.email}</span></div>}
                            {user?.link && <div className={classes.itemBody}>Link <span
                                className={classes.dataUsers}>{user?.link}</span></div>}
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}



