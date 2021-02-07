import React, {Component, ReactElement} from 'react';
import appSetup from './app-setup';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/home/home.component';
import FavoritesScreen from './src/screens/favorites/favorites.component';
import {StatusBar} from 'react-native';
import {renderNavbar} from './src/helpers/navbar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CommonVideosScreen from './src/screens/videos/videos.component';
import DefaultTheme from '@react-navigation/native/src/theming/DefaultTheme';

const Tab = createMaterialTopTabNavigator();

export default class App extends Component {
    public constructor(props) {
        super(props);
        appSetup()
    }

    public render(): ReactElement {
        return (
            <Provider store={store}>
                <StatusBar barStyle={'dark-content'}/>
                    <NavigationContainer theme={
                        {
                            ...DefaultTheme,
                            colors: {
                                ...DefaultTheme.colors,
                                background: '#C5AAB7'
                            }
                        }
                    }>
                        <Tab.Navigator
                            initialRouteName={'Home'}
                            swipeEnabled={false}
                            tabBar={renderNavbar}
                            tabBarPosition={'bottom'}
                            timingConfig={{
                                duration: 400
                            }}>
                            <Tab.Screen name={'Home'} component={HomeScreen} />
                            <Tab.Screen name={'Favorites'} component={FavoritesScreen} />
                            <Tab.Screen name={'CommonFavorites'} component={CommonVideosScreen} />
                        </Tab.Navigator>
                    </NavigationContainer>
            </Provider>
        );
    }
}
