import React, {ReactElement} from 'react';
import {SafeAreaView, View} from 'react-native';
import Avatar from '../../components/avatar/avatar.component';
import LoginComponent from '../../components/login/login.component';
import {connect} from 'react-redux';
import {AppState} from '../../store/configureStore';
import {UserFirebase} from '../../_interfaces/user.interface';
import {styles} from './home.styles';

const HomeScreen = ({user}: {user: UserFirebase}): ReactElement =>
    <SafeAreaView style={styles.container}>
        {user && <View style={styles.avatarWrapper}><Avatar user={user}/></View>}
        {!user && <LoginComponent/>}
    </SafeAreaView>;

const mapStateToProps = ({user}: AppState) => ({
    user: user.user
});

export default connect(mapStateToProps)(HomeScreen);
