import { createContext, useState } from "react";

export const myStore = createContext();

export const ContextProvider = ({ children }) => {

    const [count, setCount] = useState(0);
    return <myStore.Provider value={{count,setCount}}>{children} </myStore.Provider>

}