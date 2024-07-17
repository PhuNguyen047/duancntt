import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const Authentication = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authentication;
