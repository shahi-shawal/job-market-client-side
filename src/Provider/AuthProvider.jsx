import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../Config/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState()
    const [isLoading, setLoading] = useState(false)

    
    const createUser =(email, password)=>{
        isLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
   
    const login = (email,password)=>{
        isLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const googlelogin=()=>{
        isLoading(true)
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user)
            setLoading(false)
        }
        )
        return (unSubscribe)
    },[])

    const authValue={
        user,
        isLoading,
        createUser,
        login,
        googlelogin
    }
    return (
        <AuthContext.Provider value={authValue}>
           {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.object
};


export default AuthProvider;

