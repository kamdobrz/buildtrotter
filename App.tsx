import React, {Component, ReactElement} from 'react';
import appSetup from './app-setup';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/home/home.component';
import FavoritesScreen from './src/screens/favorites/favorites.component';
import {StatusBar} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CommonVideosScreen from './src/screens/videos/videos.component';
import {NAVIGATION_THEME, NAVIGATOR_CONFIG} from './src/const/navigation-theme.const';

const Tab = createMaterialTopTabNavigator();

export default class App extends Component {
    public constructor(props) {
        super(props);
        appSetup();
    }

    public render(): ReactElement {
        return (
            <Provider store={store}>
                <StatusBar barStyle={'dark-content'}/>
                    <NavigationContainer theme={NAVIGATION_THEME}>
                        <Tab.Navigator
                            {...NAVIGATOR_CONFIG}>
                            <Tab.Screen name={'Home'} component={HomeScreen} />
                            <Tab.Screen name={'Favorites'} component={FavoritesScreen} />
                            <Tab.Screen name={'CommonFavorites'} component={CommonVideosScreen} />
                        </Tab.Navigator>
                    </NavigationContainer>
            </Provider>
        );
    }
}
