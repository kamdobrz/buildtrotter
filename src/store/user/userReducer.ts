import {UserFirebase} from '../../_interfaces/user.interface';
import {SET_USER, UserActionTypes} from './types';

interface userReducerInterface {
    user: UserFirebase;
}

const INITIAL_STATE: userReducerInterface = {
    user: null
};

export const userReducer = (state = INITIAL_STATE, action: UserActionTypes) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};

