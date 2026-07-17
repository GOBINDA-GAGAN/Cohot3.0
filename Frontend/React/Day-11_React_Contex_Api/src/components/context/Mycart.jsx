import { createContext, useState } from "react";

export const Myshop = createContext();


export const ContextProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    const [toggle, setToggle] = useState(false);

    return <Myshop.Provider value={{toggle, setToggle, cartItem, setCartItem}}>{children}</Myshop.Provider>
}