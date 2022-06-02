import React, { Children, createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isUser, setIsUser] = useState(false);

    const login = () => {
        setIsUser(true)
    }

    const logout = () => {
        setIsUser(false)
    }
    return <AuthContext.Provider value={{isUser,login,logout}}>{children}</AuthContext.Provider>
};