import { async } from "@firebase/util";
import { signInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase } from "../../../@firebase/providers";
import { login, logout, chekingCredentials } from "./authSlice"

export const  checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch( chekingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(chekingCredentials());
        const result = await signInWithGoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
        // console.log(result);
    }
}

export const startCreatingUserWithEmailPassword = ({email, password }) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
        const result = await registerUserWithEmailPassword({email, password });
        if( !result.ok ) return dispatch( logout(result))
        dispatch(login(result))
    }
}

export const startLoginWitchEmailPassword = ({email, password}) => {
    return async(dispatch) => {
        dispatch(chekingCredentials());
        const result = await loginWithEmailPassword({email, password});
        if(!result.ok) return dispatch(logout(result));
        dispatch(login(result));
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();
        dispatch(logout({}));
    }
}
