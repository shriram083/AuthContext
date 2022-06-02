import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);

    const dark = () => {
        setIsDark(true);
    }
    const light = () => {
        setIsDark(false);
    }
    return <ThemeContext.Provider value={{isDark,dark,light}}>{children}</ThemeContext.Provider>
}