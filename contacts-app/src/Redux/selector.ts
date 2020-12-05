import {IGlobalState} from './store';

interface IRootState extends IGlobalState {}

export const selectDataUsers = (state: IRootState) => state.usersData