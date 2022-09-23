import React, { useState, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Title, Button } from "react-native-paper";
import moment from "moment";

import { useAppState } from "../hooks/useAppState";
import { useDispatch } from "../hooks/useDispatch";
import { ScreenNavigation } from "../types/navigation";
import { ParkingLot, Slot } from '../types/context';
import { CREATE_SLOTS } from '../contexts/actions';

type Props = {
    navigation: ScreenNavigation;
}

const CreateSlots: React.FC<Props> = ({ navigation }) => {

    const [slots, setSlots] = useState<string>("");
    const state = useAppState();
    const dispatch = useDispatch();

    const slotCount = useMemo(() => {
        return Object.keys(state.slots).length
    }, [state]);

    const createSlots = () => {
        const count = Number(slots);
        if(count){
            const slotMap: ParkingLot = {};
            for(let i = 0; i < count; i++){
                const slotId: string = Math.random().toString();
                const slot: Slot = {
                    id: slotId,
                    createdAt: moment(),
                    regNo: ""
                }
                slotMap[slotId] = slot;
            }
            dispatch({ type: CREATE_SLOTS, payload: slotMap });
            setSlots("");
            navigation.goBack();
        }
    }

    return(
        <View style={styles.container}>
            <Title>{slotCount? slotCount: "No"} slots are created so far</Title>
            <TextInput
                value={slots}
                onChangeText={setSlots}
                mode="outlined"
                keyboardType="number-pad"
                maxLength={2}
                style={styles.input}
                testID="parking-create-text-input"
            />
            <Button
                mode="contained"
                onPress={createSlots}
                disabled={!slots}
                contentStyle={styles.button}
                testID="parking-create-submit-button"
            >
                Create
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

export default CreateSlots;