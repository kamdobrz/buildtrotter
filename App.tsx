import React, {Component, ReactElement} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import appSetup from './app-setup';
import LoginComponent from './src/components/login/login.component';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import Avatar from './src/components/avatar/avatar.component';

export default class App extends Component {
    public constructor(props) {
        super(props);
        appSetup()
    }

    public render(): ReactElement {
        const user = store.getState().user.user;
        console.log('app', user);
        return (
            <Provider store={store}>
                <StatusBar barStyle={'dark-content'}/>
                <SafeAreaView>
                    <View>
                        <LoginComponent />
                    </View>
                </SafeAreaView>
            </Provider>
        );
    }
}
