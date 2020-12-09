import {Backdrop, Fade, IconButton, Modal, TextField} from "@material-ui/core";
import classes from './UserEditionBlock.module.sass'
import React from "react";


type UserEditionBlockPropsType = {
    showModal: boolean
    surname?: string
    name?: string
    birthday?: string
    phone?: string
    email?: string
    link?: string
    onChangeDataUser: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClickSaveDataUser: () => void
    onClickCancel: () => void
    error: string
    clearErrorField: () => void
    onKeyPressHandler: (e: React.KeyboardEvent<HTMLDivElement>) => void
    validationErrorEmail: string
    validationErrorPhone: string

}

export const UserEditionBlock= React.memo((props: UserEditionBlockPropsType) => {
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
               onClose={props.onClickCancel}
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
                                <input data-name={'surname'} placeholder={'Фамилия'} value={props.surname}
                                       onChange={props.onChangeDataUser} onFocus={props.clearErrorField}/>
                                {props.error ? <div className={classes.errorBlock}>
                                    <input data-name={'name'} placeholder={'Имя'} value={props.name}
                                           onChange={props.onChangeDataUser}
                                           className={classes.error} onFocus={props.clearErrorField}/>
                                    {props.error && <div className={classes.errorMessage}>{props.error}</div>}
                                </div> : <input data-name={'name'} placeholder={'Имя'} value={props.name}
                                                onChange={props.onChangeDataUser}/>
                                }
                            </div>
                            <input type='date' data-name={'birthday'} value={props.birthday}
                                   placeholder={'Дата рождения'}
                                   onChange={props.onChangeDataUser} onFocus={props.clearErrorField}/>

                            {props.error
                                ? <div className={`${classes.errorBlock}  ${classes.errorBlockEmail} `}>
                                <input data-name={'phone'} value={props.phone} placeholder={'Телефон'}
                                       onChange={props.onChangeDataUser} className={classes.error}
                                       onFocus={props.clearErrorField}/>
                                {props.error && <div className={classes.errorMessage}>{props.error}</div>}
                            </div>
                                : props.validationErrorPhone
                                    ?<div className={`${classes.errorBlock}  ${classes.errorBlockEmail} `}>
                                <input className={classes.error} data-name={'phone'} value={props.phone}
                                       placeholder={'Телефон'} onChange={props.onChangeDataUser}/>
                                       <div className={classes.errorMessage}>{props.validationErrorPhone}</div></div>
                                        :<input data-name={'phone'} value={props.phone} placeholder={'Телефон'} onChange={props.onChangeDataUser} />
                            }

                            {props.validationErrorEmail ?
                                <div className={`${classes.errorBlock}  ${classes.errorBlockEmail} `}>
                                    <input type='email' data-name={'email'} value={props.email}
                                           placeholder={'Электронная почта'}
                                           onChange={props.onChangeDataUser} className={classes.error}
                                           onFocus={props.clearErrorField}/>
                                    {props.validationErrorEmail &&
                                    <div className={classes.errorMessage}>{props.validationErrorEmail}</div>}
                                </div> : <input type='email' data-name={'email'} value={props.email}
                                                placeholder={'Электронная почта'}
                                                onChange={props.onChangeDataUser} onFocus={props.clearErrorField}/>
                            }


                            <input data-name={'link'} value={props.link} placeholder={'Ссылка'}
                                   onChange={props.onChangeDataUser} onFocus={props.clearErrorField}/>

                        </div>
                        <div className={classes.modalFooter}>
                            <div className={classes.buttonGroup}>
                                <button onClick={props.onClickCancel}>Отмена</button>
                                <button onClick={props.onClickSaveDataUser}>Сохранить</button>
                            </div>
                        </div>

                    </div>

                </div>
            </Fade>
        </Modal>

    )
})

// <TextField label="Фамилия"
//            style={{width: '45%'}}
//            value={props.surname}
//            onChange={(e) => {props.changeSurname(e.currentTarget.value.trim())}}
//            onFocus={props.onFocusInputElement}
//            data-name='surname'/>
// <TextField label="Имя"
//            style={{width: '45%'}}
//            value={props.name}
//            onChange={(e) => {props.changeName(e.currentTarget.value.trim())}}
//            onFocus={props.onFocusInputElement}
//            data-name='name'
//            error={!!props.error}
//            helperText={props.error}/>

// <TextField label="Дата рождения"
//            style={style}
//            value={props.birthday}
//            onChange={(e) => {props.changeBirthday(e.currentTarget.value.trim())}}
//            onFocus={props.onFocusInputElement}
//            data-name='birthday'/>
// <TextField label="Телефон"
//            style={style}
//            value={props.phone}
//            onChange={(e) => {props.changePhone(e.currentTarget.value.trim())}}
//            onFocus={props.onFocusInputElement}
//            data-name='phone'
//            error={!!props.error}
//            helperText={props.error} />
// <TextField label="Эл. почта"
//            style={style}
//            value={props.email}
//            onChange={(e) => {props.changeEmail(e.currentTarget.value.trim())}}
//            onFocus={props.onFocusInputElement}
//            data-name='email'/>
// <TextField id={'link'}
//            label="Ссылка"
//            style={style}
//            value={props.link}
//
//            onChange={ChangeUsersData}
//            onFocus={props.onFocusInputElement}
// />
// <input data-name={'input'} value={'f'} onChange={ChangeUsersData}/>
// <input data-name={'inputTwo'} value={'f'} onChange={ChangeUsersData}/>