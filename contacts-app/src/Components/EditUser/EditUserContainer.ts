import {connect} from "react-redux";
import {EditUser} from "./EditUser";
import {setEditUser} from "../../Redux/action";



const putStateToProps = (state: any) => {
    console.log(state)
    return {
        editUser: state.usersData.editUser,
        users:state
    }
}

// const putDispatchToProps = (dispatch:any) => {
//     return{
//         setEditUser:(userId:string)=>{
//             dispatch(setEditUser(userId))
//     }
//     }
// }

export default connect(putStateToProps)(EditUser)