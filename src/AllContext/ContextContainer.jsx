import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBaseFiles/Frb';
import { axiosNormal } from '../Custom_Hooks/useAxios';
export const ContextProvider = createContext(null);
const ContextContainer = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const savedUser = async (user) => {
        const userData = {
            name: user?.displayName,
            email: user?.email,
            userRole: 'User',
            status: 'verified',
        }
        const { data } = await axiosNormal.put('/user', userData)
        return data
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                savedUser(currentUser)
            }
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const contextInfoPass = { user, loading, googleLogin, loginUser, createUser, logOutUser };
    return (
        <ContextProvider.Provider value={contextInfoPass}>
            {children}
        </ContextProvider.Provider>
    );
};

export default ContextContainer;