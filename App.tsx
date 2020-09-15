import React, {Component, ReactElement} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import appSetup from './app-setup';
import LoginComponent from './src/components/login/login.component';

export default class App extends Component {
    public constructor(props) {
        super(props);
        appSetup()
    }

    public render(): ReactElement {
        return (
            <>
                <StatusBar barStyle={'dark-content'}/>
                <SafeAreaView>
                    <View>
                        <LoginComponent />
                    </View>
                </SafeAreaView>
            </>
        );
    }
}
