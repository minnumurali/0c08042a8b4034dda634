import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableRipple, List } from "react-native-paper";

import { ScreenNavigation } from "../types/navigation";

type Props = {
    navigation: ScreenNavigation;
}

const Home: React.FC<Props> = ({ navigation }) => {

    const createSlots = () => navigation.navigate("CreateSlots");
    const registerSlots = () => navigation.navigate("RegisterSlots");
    const clearSlots = () => navigation.navigate("ClearSlots");

    return(
        <View style={styles.container} testID="home">
            <List.Section>
                <List.Subheader>Actions</List.Subheader>
                <TouchableRipple onPress={createSlots}>
                    <List.Item title="Create Slots" />
                </TouchableRipple>
                <TouchableRipple onPress={registerSlots}>
                    <List.Item title="Register Slots" />
                </TouchableRipple>
                <TouchableRipple onPress={clearSlots}>
                    <List.Item title="Clear Slots" />
                </TouchableRipple>
            </List.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "5%"
    }
});

export default Home;