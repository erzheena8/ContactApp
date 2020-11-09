import {connect} from "react-redux";
import {EditUser} from "./EditUser";
import {setEditUser} from "../../Redux/action";



const putStateToProps = (state: any) => {
    return {
        editUser: state.editUser,
        users:state.users
    }
}

const putDispatchToProps = (dispatch:any) => {
    return{
        setEditUser:(userId:string)=>{
            dispatch(setEditUser(userId))
    }
    }
}

export default connect(putStateToProps,putDispatchToProps)(EditUser)