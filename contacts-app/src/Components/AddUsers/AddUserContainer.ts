import {connect} from "react-redux";
import {AddUsers} from "./AddUsers";
import {
    addBirthday,
    addEmail,
    addLink,
    addName,
    addPhone,
    addSurname,
    addUserData,
    clearUserData
} from "../../Redux/action";

const putStateToProps = (state:any) => {
    return {
        surname:state.usersData.surname,
        name:state.usersData.name,
        phone:state.usersData.phone,
        birthday:state.usersData.birthday,
        email:state.usersData.email,
        link:state.usersData.link
    }
}
const putDispatchToProps = (dispatch:any) => {
    return{
        addSurname: (title:string) => {
            dispatch(addSurname(title))
        },
        addEmail: (title:string) => {
            dispatch(addEmail(title))
        },
        addName: (title:string) => {
            dispatch(addName(title))
        },
        addBirthday: (title:string) => {
            dispatch(addBirthday(title))
        },
        addPhone: (title:string) => {
            dispatch(addPhone(title))
        },
        addLink: (title:string) => {
            dispatch(addLink(title))
        },
        addUserData: () => {
            dispatch(addUserData())
        },
        clearUserData: () => {
            dispatch(clearUserData())
        },
    }
}

export default connect(putStateToProps, putDispatchToProps)(AddUsers)