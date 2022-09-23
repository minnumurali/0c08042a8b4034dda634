import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { State } from "../types/context";

export const useAppState = (): State => {
    return useContext(AppContext).state;
}