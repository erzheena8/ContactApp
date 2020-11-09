import {v1} from "uuid";
import {initialStateType,  usersReducer} from "../reducers";

test ('correct contactsApp should be addUser', ()=> {


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
        surname:'Ермолаев',
        name:'Павел',
        birthday:'10.10.1993',
        phone:'+7(906)196-46-23',
        email:'pavel@mail.mail',
        link:'id24572',
    }

    const endState = usersReducer(startState, { type: 'ACTION_ADD_USERS_DATA'})

    expect(endState.users.length).toBe(3);
    // expect(endState.users[0]._id).toBe(userIdSecond);
})