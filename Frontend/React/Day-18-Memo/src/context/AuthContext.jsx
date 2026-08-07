import { createContext, useState } from "react";

export const Auth = createContext();



export const AuthContextProvider = ({ children }) => {

    const [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem("registerUser")) || []);
    const [login, setLogin] = useState(JSON.parse(localStorage.getItem("loginUser")));
    const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem("isLogin"))|| false);



    return (
        <Auth.Provider value={{ registerUser, setRegisterUser, login, setLogin, setIsLogin, isLogin }}>
            {children}
        </Auth.Provider>
    )
}



