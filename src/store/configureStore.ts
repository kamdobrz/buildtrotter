import {combineReducers, createStore} from 'redux';
import {userReducer} from './user/userReducer';

const rootReducer = combineReducers({
    user: userReducer
});

const configureStore = createStore(rootReducer);

export type AppState = ReturnType<typeof rootReducer>;

export default configureStore;
