import React, { useState } from "react"
import { View, StyleSheet, Alert } from "react-native"
import { TextInput, Button } from "react-native-paper";
import moment from "moment";

import { useAppState } from "../hooks/useAppState";
import { useDispatch } from "../hooks/useDispatch";
import { ScreenNavigation } from "../types/navigation";
import { Slot } from '../types/context';
import { REGISTER_SLOT } from '../contexts/actions';

type Props = {
    navigation: ScreenNavigation;
}

const RegisterSlots: React.FC<Props> = ({ navigation }) => {

    const [regNo, setRegNo] = useState<string>("");
    const state = useAppState();
    const dispatch = useDispatch();

    const registerSlot = () => {
        let doesIdExist: boolean = false;
        const freeSlotId = Object.keys(state.slots).find(slot => {
            if(state.slots[slot].regNo === regNo){
                doesIdExist = true;
            }
            return state.slots[slot].regNo === "";
        });
        if(doesIdExist){
            Alert.alert("", "This vehicle is already registered.");
            return;
        }
        if(!freeSlotId){
            Alert.alert("", "All slots are filled. Please try once slots are available.");
            return;
        }

        const newSlot: Slot = {
            id: freeSlotId,
            createdAt: moment(),
            regNo: regNo
        }
        dispatch({ type: REGISTER_SLOT, payload: newSlot });
        setRegNo("");
        Alert.alert("", "Registered successfully.");
        setTimeout(() => {
            navigation.goBack();
        }, 1000);
    }

    return(
        <View style={styles.container}>
            <TextInput
                value={regNo}
                onChangeText={setRegNo}
                mode="outlined"
                maxLength={10}
                style={styles.input}
                testID="parking-drawing-registration-input"
            />
            <Button
                mode="contained"
                onPress={registerSlot}
                disabled={!regNo}
                contentStyle={styles.button}
                testID="parking-drawing-add-car-button"
            >
                Register
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "5%"
    },
    input: {
        marginBottom: 20
    },
    button: {
        height: 50
    }
});

export default RegisterSlots;