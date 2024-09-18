import React, { createContext, useState } from 'react'

export const AppContext = createContext();


export default function ContextProvider({ children }) {
    let [diceResult, setDiceResult] = useState();
    
    function updateDiceResult(diceRoll) {
        setDiceResult(diceRoll);
    }

    const data = {
        diceResult: diceResult,
        updateDiceResult: updateDiceResult
    }

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
}

