import { createContext, useState } from "react";

export const Auth = createContext();


export const AuthContext = ({ children }) => {


    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);

    const alredyExistUser = users.find((newUser) => {
        return users.email == newUser.email
    })
    if (alredyExistUser) {
        return {
            success: false,
            mesage: "user alredy exist"
        }
    }


    return (
        <Auth.Provider value={{ users, setUsers }}>{children}</Auth.Provider>
    )
}
