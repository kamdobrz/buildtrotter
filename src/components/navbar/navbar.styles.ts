import {StyleSheet} from 'react-native';
import {NAVBAR_BACKGROUND} from '../../const/colors.const';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: 'grey',
        borderTopWidth: 1,
        backgroundColor: NAVBAR_BACKGROUND
    },
    item: {
        paddingHorizontal: 26
    }
});
