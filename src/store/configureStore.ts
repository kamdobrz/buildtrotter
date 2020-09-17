import {combineReducers, createStore} from 'redux';
import {userReducer} from './user/userReducer';

const rootReducer = combineReducers({
    user: userReducer
});

const configureStore = createStore(rootReducer);

export default configureStore;
