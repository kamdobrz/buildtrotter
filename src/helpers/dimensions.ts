import {Dimensions, ScaledSize} from 'react-native';

export const heightDimension = (): number =>
    Dimensions.get('window').height;

export const widthDimension = (): number =>
    Dimensions.get('window').width;
