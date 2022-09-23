import React, { createContext, useReducer } from "react";

import { initState, reducer } from "./appReducer";
import { Context } from "../types/context";

const defaultContext = {
    state: initState,
    dispatch: () => initState
}

export const AppContext = createContext<Context>(defaultContext);

type Props = {
    children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initState);

    return(
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;