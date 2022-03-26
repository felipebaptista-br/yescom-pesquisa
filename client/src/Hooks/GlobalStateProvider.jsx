import React, { useContext, useState, createContext } from "react";

const GlobalStateContext = createContext({});

export default function GlobalStateProvider({ children }) {
    const [responses, setResponses] = useState([]);

    return (
        <GlobalStateContext.Provider
            value={{
                responses,
                setResponses,
            }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
}

export function useGlobalState() {
    const context = useContext(GlobalStateContext);

    if (!context) {
        throw new Error(
            "useGlobalState must be used within an GlobalStateProvider"
        );
    }

    return context;
}