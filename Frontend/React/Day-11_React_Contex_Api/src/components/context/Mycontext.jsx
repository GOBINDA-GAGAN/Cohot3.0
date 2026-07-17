import { createContext } from "react";

const MyStore = createContext();

export const Contextprovider = ({ children }) => {
    return <MyStore.Provider>
        {children}

    </MyStore.Provider>
}