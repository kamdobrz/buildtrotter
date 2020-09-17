import React, {ReactElement} from 'react';
import {AuthService} from '../../../_services/auth.service';
import {Button, Text, View} from 'react-native';
import Link from '../link/link.component';

const LoginComponent = (): ReactElement => {
    return <View>
        <Button
            title={'Log in'}
            onPress={AuthService.logInWithCredentials('kamil.dobrzynski@neoteric.eu', 'SuperSecretPassword!')} />
            <Link onPress={AuthService.resetPassword('kamil.dobrzynski@neoteric.eu')}>
        <View style={{alignItems: 'center'}}>
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
    //
    // return (
    //     <View>
    //         <Text>Welcome {user?.email}</Text>
    //         <Button
    //             title={'Log out'}
    //             onPress={AuthService.logOut} />
    //     </View>
    // );
};

export default LoginComponent;
