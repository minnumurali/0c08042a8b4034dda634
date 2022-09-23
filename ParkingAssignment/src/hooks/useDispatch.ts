import { useContext, Dispatch } from "react";
import { AppContext } from "../contexts/AppContext";
import { Action } from "../types/context";

export const useDispatch = (): Dispatch<Action> => {
    return useContext(AppContext).dispatch;
}