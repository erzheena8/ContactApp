import {v1} from "uuid";
import {initialStateType,  usersReducer} from "../reducers";

test ('correct contactsApp should be addUserSurname', ()=> {

const surnameUser = ''
    const startState: initialStateType= {
        users:[
            {
                _id:v1(),
                surname:'Ермолаев',
                name:'Павел',
                birthday:'10.10.1993',
                phone:'+7(906)196-46-23',
                email:'pavel@mail.mail',
                link:'id24572',
            }, {
                _id:v1(),
                surname:'Ермолаев',
                name:'Павел',
                birthday:'10.10.1993',
                phone:'+7(906)196-46-23',
                email:'pavel@mail.mail',
                link:'id24572',
            },

        ],
      surname:''
    }

    const endState = usersReducer(startState, { type: 'ACTION_ADD_USERS_SURNAME', title:surnameUser})

    expect(endState.surname).toBe(surnameUser);
    // expect(endState.users[0]._id).toBe(userIdSecond);
})