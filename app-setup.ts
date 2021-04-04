import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import {UserFirebase} from './src/_interfaces/user.interface';
import {AuthService} from './_services/auth.service';
import store from './src/store/configureStore';
import {setUser} from './src/store/user/actions';

const appSetup = (): void => {
    GoogleSignin.configure({
        forceCodeForRefreshToken: true,
        offlineAccess: true,
        webClientId: Config.GOOGLE_WEB_CLIENT_ID
    });
    const onAuthStateChanged = (user: UserFirebase) => {
        store.dispatch(setUser(user));
    };

    AuthService.onAuthChangeListener(onAuthStateChanged);
    AuthService.signInAnonymously();
};

export default appSetup;

