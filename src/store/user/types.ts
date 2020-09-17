import {UserFirebase} from '../../_interfaces/user.interface';

export const SET_USER = 'SET_USER';

interface setUserAction {
    type: typeof SET_USER;
    user: UserFirebase;
}

export type UserActionTypes =
    setUserAction;
