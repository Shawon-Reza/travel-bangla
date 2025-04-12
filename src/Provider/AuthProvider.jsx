import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../Firebase/firebase.init';

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return (createUserWithEmailAndPassword(auth, email, password))
    }

    const loginWithEmail = (email, password) => {
        return (signInWithEmailAndPassword(auth, email, password))
    }

    const emailVarification = () => {
        return (sendEmailVerification(auth.currentUser))
    }






    const authinfo = {
        createUser,
        loginWithEmail,
        emailVarification
    }


    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;