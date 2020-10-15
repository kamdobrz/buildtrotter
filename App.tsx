import React, {Component, ReactElement} from 'react';
import appSetup from './app-setup';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/home/home.component';
import FavoritesScreen from './src/screens/favorites/favorites.component';
import CommonFavoritesScreen from './src/screens/common-favorites/common-favorites.component';
import {StatusBar} from 'react-native';
import {renderNavbar} from './src/helpers/navbar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

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
                    <NavigationContainer>
                        <Tab.Navigator
                            initialRouteName={'Home'}
                            tabBar={renderNavbar}
                            tabBarPosition={'bottom'}
                            timingConfig={{
                                duration: 400
                            }}
                        >
                            <Tab.Screen name={'Home'} component={HomeScreen} />
                            <Tab.Screen name={'Favorites'} component={FavoritesScreen} />
                            <Tab.Screen name={'CommonFavorites'} component={CommonFavoritesScreen} />
                        </Tab.Navigator>
                    </NavigationContainer>
            </Provider>
        );
    }
}
