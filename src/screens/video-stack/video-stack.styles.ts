import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 32
    },
    frontItem: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1000
    }
});
