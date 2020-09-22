import {GoogleSignin} from '@react-native-community/google-signin';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {UserFirebase} from '../src/_interfaces/user.interface';

export class AuthService {
    public static user: UserFirebase;

    public static onAuthChangeListener = (onAuthStateChanged: FirebaseAuthTypes.AuthListenerCallback): () => void =>
        auth().onAuthStateChanged(onAuthStateChanged);

    public static async signInAnonymously(): Promise<void> {
        try {
            auth().signInAnonymously();
        } catch(e) {
            if (e.code === 'auth/operation-not-allowed') {
                // TODO
            }
            console.error(e);
        }
    }

    public static async signInGoogle(): Promise<void> {
        try {
            const {idToken} = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
        } catch (e) {
            // TODO
        }

    }

    public static async createUser(): Promise<void> {
        try {
            await auth().createUserWithEmailAndPassword('kamil.dobrzynski@neoteric.eu', 'SuperSecretPassword!');
        } catch(e) {
            if (e.code === 'auth/email-already-in-use') {
                // TODO
            }

            if (e.code === 'auth/invalid-email') {
                // TODO
            }
            // TODO
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
        } catch (e) {
            // TODO
        }
    };

    public static async logOut(): Promise<void> {
        try {
            await auth().signOut();
        } catch {
            // TODO
        }
    }
}
