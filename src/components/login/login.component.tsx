import React, {ReactElement} from 'react';
import {AuthService} from '../../../_services/auth.service';
import {Button, Text, View} from 'react-native';
import Link from '../link/link.component';
import {styles} from './login.styles';

const LoginComponent = (): ReactElement =>
    <View style={styles.container}>
        <Button
            title={'Log in'}
            onPress={AuthService.logInWithCredentials('kamil.dobrzynski@neoteric.eu', 'SuperSecretPassword!')} />
            <Link onPress={AuthService.resetPassword('kamil.dobrzynski@neoteric.eu')}>
        <View>
            <Text>Forgot password?</Text>
        </View>
        </Link>
        <Button
            title={'Create an account'}
            onPress={AuthService.createUser} />
        <Button
            title='Google Sign-In'
            onPress={AuthService.signInGoogle}
        />
    </View>;

export default LoginComponent;
