import { IMainContext, MainProviderProps } from "config";
import React, { createContext, useState } from "react";

const MainContext = createContext<IMainContext | null>(null);

const MainProvider = (props: MainProviderProps) => {

    const [text, setText] = useState('')
    const [patterns, setPatterns] = useState<Array<string>>([])
    const [data, setData] = useState({})

    return (
        <MainContext.Provider value={
            {
                text,
                setText,
                patterns,
                setPatterns,
                data,
                setData,
            }}>
            {props.children}
        </MainContext.Provider>
    )
}

export {
    MainContext,
    MainProvider
}