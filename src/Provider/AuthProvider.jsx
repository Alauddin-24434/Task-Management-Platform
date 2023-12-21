/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // ------first time create user by email and password ----------------
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // ---------- user sign in by email and password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ---------- google sign in -----------
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // --------------user logout ----------------

    const logout = () => {
        return signOut(auth)
    }

    //  --------- update user--------------
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // ----------- user  onAuthStateChange-------------------
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('CurrentUser-->', currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])



    //-----------------  all auth information-----------------
    const authInfo = {
        createUser,
        signIn,
        googleSignIn,
        logout,
        updateUserProfile,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;