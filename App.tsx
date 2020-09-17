import React, {Component, ReactElement} from 'react';
import appSetup from './app-setup';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/home/home.component';
import {StatusBar} from 'react-native';

const Root = createStackNavigator()

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
                        <Root.Navigator
                            headerMode={'none'}
                            initialRouteName='Home'>
                            <Root.Screen name='Home' component={HomeScreen} />
                        </Root.Navigator>
                    </NavigationContainer>
            </Provider>
        );
    }
}
