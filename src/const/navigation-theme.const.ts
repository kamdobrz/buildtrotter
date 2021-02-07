import DefaultTheme from '@react-navigation/native/src/theming/DefaultTheme';
import {renderNavbar} from '../helpers/navbar';
import {SCREENS_BACKGROUND} from './colors.const';

export const NAVIGATION_THEME = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: SCREENS_BACKGROUND
    }
};
export const NAVIGATOR_CONFIG = {
    initialRouteName: 'Home',
    swipeEnabled: false,
    tabBar: renderNavbar,
    tabBarPosition: 'bottom' as const,
    timingConfig: {
        duration: 400
    }
};
