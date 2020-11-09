import {connect} from "react-redux";
import {Menu} from "./Menu";

const putStateToProps = (state: any) => {
    return {
        users: state.usersData.users
    }
}

export default connect(putStateToProps)(Menu)