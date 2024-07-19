import { createContext, useState } from "react";
import React from "react";
export const AuthContext = createContext({
    isAuthenticated: false,
    user: {
        email: '',
        name: ''
    },
});

export  const AuthWrapper = (props) =>{
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        user: {
            email: '',
            name: ''
        },
    });

    const [appLoading,setAppLoading] = useState(true)
    return(
        <AuthContext.Provider value={{
            auth,
            setAuth,
            appLoading,
            setAppLoading
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}