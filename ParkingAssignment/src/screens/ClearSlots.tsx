import React, { useMemo } from "react";
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { Paragraph, Title, List, Button } from "react-native-paper";
import moment from "moment";

import { checkStatus } from "../actions";
import { useAppState } from "../hooks/useAppState";
import { useDispatch } from "../hooks/useDispatch";
import { ScreenNavigation } from "../types/navigation";
import { Slot } from '../types/context';
import { UPDATE_SLOTS } from '../contexts/actions';
import { Moment } from 'moment';

type Props = {
    navigation: ScreenNavigation;
}

const ClearSlots: React.FC<Props> = ({ navigation }) => {

    const state = useAppState();
    const dispatch = useDispatch();

    const slotsArray = useMemo(() => {
        return Object.values(state.slots);
    }, [state]);

    const calculateAmount = (time: Moment): number => {
        const hours = moment().diff(time, "hours");
        if(hours <= 2){
            return 10;
        }
        return (hours - 1) * 10;
    }

    const calculateTime = (time: Moment): number => {
        return moment().diff(time, "hours") || 1;
    }

    const clearSlot = async (id: string) => {
        const { [id]: slot, ...rest } = state.slots;
        const resp = await checkStatus(slot.regNo, calculateAmount(slot.createdAt));
        if(resp){
            dispatch({
                type: UPDATE_SLOTS,
                payload: {
                    ...rest,
                    [id]: {
                        id: id,
                        regNo: "",
                        createdAt: moment()
                    }
                }
            });
        } else {
            Alert.alert("Error", "Status check failed");
        }
    }

    return(
        <View
            style={styles.container}
            testID="deregister-car-registration"
        >
            <FlatList
                data={slotsArray}
                keyExtractor={slot => slot.id}
                ListEmptyComponent={<Title>No booked slots...</Title>}
                renderItem={({ item, index }) => {
                    return(
                        <List.Section
                            style={styles.section}
                            testID={item.regNo? `parking-drawing-registered-${index}`: `parking-drawing-space-${index}`}
                        >
                            <Title testID={`parking-drawing-space-number-${index}`}>ID: {item.id}</Title>
                            <Paragraph>Reg No: 
                                <Paragraph style={{ color: item.regNo? "red": "green" }}>{item.regNo || "Free slot"}</Paragraph>
                            </Paragraph>
                            <Paragraph testID="deregister-time-spent">Time spent: {item.regNo? calculateTime(item.createdAt): 0} hr</Paragraph>
                            <Paragraph testID="deregister-charge">Amount: {item.regNo? calculateAmount(item.createdAt): 0}</Paragraph>
                            <Button
                                onPress={() => clearSlot(item.id)}
                                contentStyle={styles.button}
                                disabled={!item.regNo}
                                testID="deregister-payment-button"
                            >
                                Payment Taken
                            </Button>
                        </List.Section>
                    );
                }}
            />
            <Button
                onPress={navigation.goBack}
                mode="contained"
                contentStyle={styles.button}
                testID="deregister-back-button"
            >
                Back
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "5%"
    },
    button: {
        height: 50
    },
    section: {
        borderColor: "#cccccc",
        borderBottomWidth: 1
    }
});

export default ClearSlots;