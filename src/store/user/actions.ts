import {UserFirebase} from '../../_interfaces/user.interface';
import {SET_USER, UserActionTypes} from './types';

export const setUser = (user: UserFirebase): UserActionTypes => (
    {
        type: SET_USER,
        user
    }
);
