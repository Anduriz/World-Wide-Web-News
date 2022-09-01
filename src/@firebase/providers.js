import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // Como obtener credenciales y obtener un token de google
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log(credentials);
        const {displayName, email, photoURL, uid } = result.user;
        return{
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
    
        return {
            ok: false,
            errorCode,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;

        await updateProfile(FirebaseAuth.currentUser, {displayName})

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage,
        }
    }
}

export const loginWithEmailPassword = async ({email, password}) => {
    try{
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {displayName, photoURL, uid } = result.user;
        return{
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error){
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage,
        }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}