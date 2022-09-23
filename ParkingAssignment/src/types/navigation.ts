import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationProp = {
    Home: undefined;
    CreateSlots: undefined;
    RegisterSlots: undefined;
    ClearSlots: undefined;
}

export type ScreenNavigation = NativeStackNavigationProp<NavigationProp, "Home" | "CreateSlots" | "RegisterSlots" | "ClearSlots">;