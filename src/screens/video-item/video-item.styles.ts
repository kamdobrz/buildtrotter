import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    item: {
        position: 'absolute',
        left: 0,
        right: 0,
        width: '100%',
        height: '100%'
    },
    linearGradient: {
        position: 'absolute',
        top: 0,
        height: 150,
        width: '100%',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        zIndex: 100
    },
    icon: {
        position: 'absolute',
        zIndex: 500,
        top: 24
    },
    leftIcon: {
        left: 24
    },
    rightIcon: {
        right: 24
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 16
    }
});
