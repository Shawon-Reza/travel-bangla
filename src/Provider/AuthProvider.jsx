import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
    const [loginUser, setLoginUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const emailVarification = () => {
        return sendEmailVerification(auth.currentUser);
    };

    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return (signInWithPopup(auth, googleProvider))
    }


    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log("User logged out");
                setLoginUser(null);
            })
            .catch((error) => {
                console.log("Error on logout:", error.message);
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User signed in:", user);
                setLoginUser(user);
            } else {
                console.log("No user signed in");
                setLoginUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const authinfo = {
        createUser,
        loginWithEmail,
        emailVarification,
        loginUser,
        logout,
        googleLogin
    };

    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;
