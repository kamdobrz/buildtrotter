import {GoogleSignin} from '@react-native-community/google-signin';
import Config from 'react-native-config';

const appSetup = (): void => {
    GoogleSignin.configure({
        forceCodeForRefreshToken: true,
        offlineAccess: true,
        webClientId: Config.GOOGLE_WEB_CLIENT_ID
    });
};

export default appSetup;

