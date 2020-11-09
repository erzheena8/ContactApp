import {v1} from "uuid";
import {initialStateType,  usersReducer} from "../reducers";

test ('correct contactsApp should be removeUser', ()=> {
    let userIdFirst:string = v1()
    let userIdSecond:string = v1()

    const startState: initialStateType= {
        users:[
        { _id: userIdFirst,
            surname: 'Холодкова',
            name: 'Дивора',
            birthday: '21.04.1973',
            phone: '+7(999)657-42-32',
            email: 'holodkova@mail.com',
            link: 'id32445'},
        {_id: userIdSecond, surname: 'Реплин',
            name: 'Лемарк',
            birthday: '14.07.1985',
            phone: '+7(961)971-02-42',
            email: 'replin@mail.mail',
            link: 'id17220'}
    ]}

    const endState = usersReducer(startState, { type: 'ACTION_REMOVE_USERS_DATA', id: userIdFirst})

    expect(endState.users.length).toBe(1);
    expect(endState.users[0]._id).toBe(userIdSecond);
})