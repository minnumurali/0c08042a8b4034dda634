import { State, Action } from "../types/context";
import { CREATE_SLOTS, UPDATE_SLOTS, REGISTER_SLOT } from "./actions";

export const initState: State = {
    slots: {}
}

export function reducer( state= initState, action: Action): State {

    switch(action.type){
        case CREATE_SLOTS:
            return {
                ...state,
                slots: {
                    ...action.payload
                }
            }
        case UPDATE_SLOTS:
            return {
                slots: action.payload
            }
        case REGISTER_SLOT:
            return {
                ...state,
                slots: {
                    ...state.slots,
                    [action.payload.id]: action.payload
                }
            }
        default:
            return state;
    }
}