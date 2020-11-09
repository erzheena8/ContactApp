import React from 'react';
import classes from './DataAboutUser.module.sass';
import calendar from './icons/calendar.png'
import phone from './icons/phone-call.png'
import email from './icons/email.png'
import {Backdrop, Fade, IconButton, Modal} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {Delete} from "@material-ui/icons";
import ClearIcon from '@material-ui/icons/Clear';
import {showInformationUsers} from "../../Redux/action";
import {connect} from "react-redux";

type DataAboutUserPropsType = {
    setShowInfo: (showInfo: boolean) => void
    showInfo: boolean
}


export function DataAboutUser(props: any) {
    const styleModalWindow = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const onCloseModal = () => {
        props.setShowInfo(false)

    }
    return (
        <Modal open={props.showInfo}
               onClose={onCloseModal}
               closeAfterTransition
               onKeyPress={(event) => {
                   if (event.key === 'Enter' || event.key === 'Escape') {
                       props.setShowInfo(false)

                   }
               }}
               BackdropComponent={Backdrop}
               BackdropProps={{
                   timeout: 500,
               }}
               className={classes.mainModal}
               style={styleModalWindow}>
            <Fade in={props.showModal}>
                <div className={classes.information} style={{opacity: '1', visibility: 'visible', outline: 'none'}}>
                    <div className={classes.informationInner}>
                        <div className={classes.informationHead}>
                            <div className={classes.titleHead}> {props.data.surname} {props.data.name} </div>
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
                            {props.data.birthday && <div className={classes.itemBody}><img src={calendar}/> <span
                                className={classes.dataUsers}>{props.data.birthday}</span></div>}
                            {props.data.phone && <div className={classes.itemBody}><img src={phone}/> <span
                                className={classes.dataUsers}>{props.data.phone}</span></div>}
                            {props.data.email && <div className={classes.itemBody}><img src={email}/> <span
                                className={classes.dataUsers}>{props.data.email}</span></div>}
                            {props.data.link && <div className={classes.itemBody}>Link <span
                                className={classes.dataUsers}>{props.data.link}</span></div>}
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
}

const putStateToProps = (state: any) => {
    return {
        // users:state.usersData.users,
        data: state.usersData.data
    }
}
const putDispatchToProps = (dispatch: any) => {
    return {

        showInformationUsers: (userId: string) => {
            dispatch(showInformationUsers(userId))

        }
    }
}

export default connect(putStateToProps, putDispatchToProps)(DataAboutUser)

