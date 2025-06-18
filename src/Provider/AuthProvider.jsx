import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {

    const [loginUser, setLoginUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true)

    const [userRole, setUserRole] = useState(null);




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
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                console.log("User signed in:", user);
                setLoginUser(user);
                setUserLoading(false);

                // console.log('User Role: ',userRole);

                // 🔥 Get user role from Firestore
                // try {
                //     const db = getFirestore();
                //     const userRef = doc(db, "users", user.uid);
                //     const userSnap = await getDoc(userRef);
                //     if (userSnap.exists()) {
                //         const role = userSnap.data().role || "user";
                //         setUserRole(role);
                //     } else {
                //         setUserRole("user"); // default fallback
                //     }
                // } catch (error) {
                //     console.error("Error fetching user role:", error);
                //     setUserRole("user");
                // }



                // Store user in MongoDB
                axios.post('http://localhost:5000/userdetails', user)
                    .then(res => console.log(res.data))
                    .catch(error => console.log(error));

                // JWT Token
                // axios.post('http://localhost:5000/jwt', {
                //     email: user?.email
                // }, { withCredentials: true })
                //     .then(res => console.log(res.data))
                //     .catch(err => console.log('JWT error:', err));
            } else {
                console.log("No user signed in");
                setLoginUser(null);
                setUserRole(null);
                setUserLoading(false);

                // Clear JWT token
                axios.post('http://localhost:5000/logout', {}, {
                    withCredentials: true
                })
                    .then(res => res.data)
                    .catch(err => console.log('Logout error:', err));
            }
        });



        return () => unsubscribe();
    }, []);

    useEffect(() => {
        console.log("Current role is:", userRole);
    }, [userRole]);
    // console.log('ssss',userRole);

    const authinfo = {
        createUser,
        loginWithEmail,
        emailVarification,
        loginUser,
        logout,
        googleLogin,
        userLoading,
        userRole,
        setUserRole
    };

    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;
