import {Backdrop, Fade, IconButton, Modal, TextField} from "@material-ui/core";
import classes from './UserEditionBlock.module.sass'
import React from "react";

type UserEditionBlockPropsType = {
    error: string
    showModal: boolean
    surname: string
    name: string
    birthday: string
    phone: string
    email: string
    link: string
    addSurname: (surname: string) => void
    addName: (name: string) => void
    addBirthday: (birthday: string) => void
    addPhone: (phone: string) => void
    addEmail: (email: string) => void
    addLink: (link: string) => void
    onClickSaveUserData: () => void
    onClickCancelUserData: () => void
    onKeyPressHandler: (e: React.KeyboardEvent<HTMLDivElement>) => void
    onFocusInputElement: () => void
}

export function UserEditionBlock(props: UserEditionBlockPropsType) {
    const style = {
        marginTop: '10px'
    }
    const styleModal = {
        outline: '0',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <Modal open={props.showModal}
               onClose={props.onClickCancelUserData}
               closeAfterTransition
               onKeyPress={props.onKeyPressHandler}
               BackdropComponent={Backdrop}
               BackdropProps={{
                   timeout: 500,
               }}
               style={styleModal}
               className={classes.mainModal}>
            <Fade in={props.showModal}>
                <div className={classes.modal} style={{outline: '0'}}>
                    <div className={classes.modalInner}>
                        <div className={classes.modalHead}>
                            <div className={classes.titleHead}> Создание контакта</div>
                        </div>

                        <div className={classes.modalBody}>
                            <div className={classes.modalBodyName}>
                                <TextField id="surname"
                                           label="Фамилия"
                                           style={{width: '45%'}}
                                           value={props.surname}
                                           onChange={(e) => {
                                               props.addSurname(e.currentTarget.value.trim())
                                           }} onFocus={props.onFocusInputElement}/>
                                <TextField id="name" label="Имя" style={{width: '45%'}} value={props.name}
                                           onChange={(e) => {
                                               props.addName(e.currentTarget.value.trim())
                                           }} error={!!props.error} helperText={props.error}
                                           onFocus={props.onFocusInputElement}/>
                            </div>
                            <TextField id="birthday" label="Дата рождения" style={style} value={props.birthday}
                                       onChange={(e) => {
                                           props.addBirthday(e.currentTarget.value.trim())
                                       }} onFocus={props.onFocusInputElement}/>
                            <TextField id="phone" label="Телефон" style={style} value={props.phone} onChange={(e) => {
                                props.addPhone(e.currentTarget.value.trim())
                            }} error={!!props.error} helperText={props.error} onFocus={props.onFocusInputElement}/>
                            <TextField id="email" label="Эл. почта" style={style} value={props.email} onChange={(e) => {
                                props.addEmail(e.currentTarget.value.trim())
                            }} onFocus={props.onFocusInputElement}/>
                            <TextField id="link" label="Ссылка" style={style} value={props.link} onChange={(e) => {
                                props.addLink(e.currentTarget.value.trim())
                            }} onFocus={props.onFocusInputElement}/>
                        </div>
                        <div className={classes.modalFooter}>
                            <div className={classes.buttonGroup}>
                                <button onClick={props.onClickCancelUserData}>Отмена</button>
                                <button onClick={props.onClickSaveUserData}>Сохранить</button>
                            </div>
                        </div>

                    </div>

                </div>
            </Fade>
        </Modal>

    )
}