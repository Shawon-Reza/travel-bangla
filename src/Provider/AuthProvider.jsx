import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {

    const [loginUser, setLoginUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true)




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
                alert('Logged out')
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
                setUserLoading(false)

                // Store USer data on mongodb
                axios.post('http://localhost:5000/userdetails', user)
                    .then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                // JWT token
                axios.post('http://localhost:5000/jwt', {
                    email: user?.email
                },
                    {
                        withCredentials: true
                    }
                )
                    .then(res => console.log(res.data))
                    .catch(err => {
                        console.log('Error on token request from client side:', err);
                    })
            }

            else {
                console.log("No user signed in");
                setLoginUser(null);
                setUserLoading(false)
                //    Cleare jwt token request
                axios.post('http://localhost:5000/logout',{}, {
                    withCredentials: true
                })
                    .then(res => res.data)
                    .catch(err => {
                        console.log('Error on clear token request from client side: ', err);
                    })


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
        googleLogin,
        userLoading
    };

    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;
