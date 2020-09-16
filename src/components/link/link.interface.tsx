import {ReactNode} from 'react';
import {GestureResponderEvent} from "react-native";

export interface LinkProps {
    children: ReactNode;
    onPress: (e: GestureResponderEvent) => void;
}
