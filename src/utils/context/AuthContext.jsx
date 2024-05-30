// src/context/AuthContext.js
import React, { createContext, useContext, useState } from "react";
import { getName } from "../../apis/api/user";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    const login = (token) => {
        setAuth(token);
        localStorage.setItem("token", token);

        const getUserName = async () => {
            try {
                const res = await getName();
                console.log("name", res);

                if (res.data.code === "COMMON200" || res.data.status === 200) {
                    localStorage.setItem("username", res.data.result.userName);
                } else {
                    console.log(res.data.code);
                }
            } catch (error) {
                alert("오류가 발생하였습니다!");
            }
        };

        getUserName();
    };

    const logout = () => {
        setAuth(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
