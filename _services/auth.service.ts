import {GoogleSignin} from '@react-native-community/google-signin';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {UserFirebase} from '../src/components/login/login.interface';

export class AuthService {
    public static user: UserFirebase;

    public static onAuthChangeListener = (onAuthStateChanged: FirebaseAuthTypes.AuthListenerCallback): () => void =>
        auth().onAuthStateChanged(onAuthStateChanged);

    public static async signInAnonymously(): Promise<void> {
        try {
            auth().signInAnonymously();
            console.log('User signed in anonymously');
        } catch(e) {
            if (e.code === 'auth/operation-not-allowed') {
                console.log('Enable anonymous in your firebase console.');
            }
            console.error(e);
        }
    }

    public static async signInGoogle(): Promise<void> {
        try {
            const {idToken} = await GoogleSignin.signIn();
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            console.log('googleCredential', googleCredential);
            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);
            console.log('Signed in with Google!')
        } catch (e) {
            console.log('e', e)
        }

    }

    public static async createUser(): Promise<void> {
        try {
            await auth().createUserWithEmailAndPassword('kamil.dobrzynski@neoteric.eu', 'SuperSecretPassword!');
            console.log('User account created & signed in!');
        } catch(e) {
            if (e.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (e.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(e);
        }
    }

    public static logInWithCredentials = (email: string, password: string): () => void =>
        async (): Promise<void> => {
            auth().signInWithEmailAndPassword(email, password);
        };

    public static resetPassword = (email: string): () => void =>
        async (): Promise<void> =>{
        try {
            auth().sendPasswordResetEmail(email);
            console.log('sent email')
        } catch (e) {
            console.log(e)
        }
    };

    public static async logOut(): Promise<void> {
        try {
            await auth().signOut();
            console.log('User signed out!');
        } catch {}
    }
}
