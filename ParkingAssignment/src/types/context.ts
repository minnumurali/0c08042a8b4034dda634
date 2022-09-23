import { Moment } from "moment";
import { Dispatch } from "react";

import { CREATE_SLOTS, UPDATE_SLOTS, REGISTER_SLOT } from "../contexts/actions";

export interface Slot {
    id: string;
    createdAt: Moment;
    regNo: string;
}

export interface ParkingLot {
    [id: string]: Slot;
}

export interface State {
    slots: ParkingLot;
}

type CreateAction = {
    type: typeof CREATE_SLOTS;
    payload: ParkingLot;
}

type UpdteAction = {
    type: typeof UPDATE_SLOTS;
    payload: ParkingLot;
}

type RegisterAction = {
    type: typeof REGISTER_SLOT;
    payload: Slot;
}

export type Action = CreateAction | UpdteAction | RegisterAction;

export interface Context {
    state: State;
    dispatch: Dispatch<Action>;
}