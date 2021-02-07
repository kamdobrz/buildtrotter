import React, {ReactElement, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import Avatar from '../../components/avatar/avatar.component';
import LoginComponent from '../../components/login/login.component';
import {connect, useSelector} from 'react-redux';
import {AppState} from '../../store/configureStore';
import {styles} from './home.styles';
import VideoStack from '../video-stack/video-stack.component';
import Navbar from '../../components/navbar/navbar.component';
import VideosService from '../../services/videos.service';
import {MY_UUID} from '../../_mocks/uuids.mock';
import {VIDEOS} from '../../_mocks/videos.mock';

const HomeScreen = (): ReactElement => {
    const firebaseUser = useSelector(({user}: AppState) => user.user);

    useEffect((): void => {
        // TODO: handle device UUID
        VideosService.getInstance().myId = MY_UUID;
        // TODO: handle videos from Firebase and pass it to VideoStack component
    }, []);

    return <React.Fragment>
        <SafeAreaView/>
        <View style={styles.container}>
            {firebaseUser?.email ? <View style={styles.avatarWrapper}>
                <Avatar user={firebaseUser}/>
            </View> : <LoginComponent />}
            <VideoStack videos={VIDEOS} />
            <Navbar />
        </View>
    </React.Fragment>;
};

export default connect()(HomeScreen);
