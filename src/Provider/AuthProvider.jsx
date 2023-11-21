import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Config/firebase.config";
import axios from "axios";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState()
    const [isLoading, setLoading] = useState(true)

    
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
   
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const googlelogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentuser)=>{
            const useremail = currentuser?.email || user?.email
            const loggedUser = {email: useremail}
            setUser(currentuser)
            setLoading(false)
            if(currentuser){
                axios.post( "https://job-server-as-11.vercel.app/jwt",loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log("token response",res.data)
                })
            }
            else{
                axios.post( "https://job-server-as-11.vercel.app/logout",loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log("token logout response",res.data)
                })
            }
        }
        )
        return (unSubscribe)
    },[])
    const logout = ()=>{
        return  signOut(auth)
      }
    const authValue={
        user,
        isLoading,
        createUser,
        login,
        googlelogin,
        logout
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

