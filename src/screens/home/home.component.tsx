import React, {ReactElement} from 'react';
import {SafeAreaView, View} from 'react-native';
import Avatar from '../../components/avatar/avatar.component';
import LoginComponent from '../../components/login/login.component';
import {connect} from 'react-redux';
import {AppState} from '../../store/configureStore';
import {UserFirebase} from '../../_interfaces/user.interface';
import {styles} from './home.styles';
import VideoStack from '../video-stack/video-stack.component';
import Navbar from '../../components/navbar/navbar.component'
const videos = [
    {
        id: 1,
        img: require('../../../assets/photo1.jpg')
    },
    {
        id: 2,
        img: require('../../../assets/photo2.jpg')
    },
    {
        id: 3,
            img: require('../../../assets/photo3.jpg')
    },
    {
        id: 4,
            img: require('../../../assets/photo4.jpg')
    },
    {
        id: 5,
        img: require('../../../assets/photo1.jpg')
    },
    {
        id: 6,
        img: require('../../../assets/photo2.jpg')
    },
    {
        id: 7,
            img: require('../../../assets/photo3.jpg')
    },
    {
        id: 8,
            img: require('../../../assets/photo4.jpg')
    },
];
const HomeScreen = ({user}: {user: UserFirebase}): ReactElement =>
    <SafeAreaView style={styles.container}>
        {user?.email && <View style={styles.avatarWrapper}>
            <Avatar user={user}/>
        </View>}
        {!user?.email && <LoginComponent/>}
        <VideoStack videos={videos}/>
        <Navbar />
    </SafeAreaView>;

const mapStateToProps = ({user}: AppState) => ({
    user: user.user
});

export default connect(mapStateToProps)(HomeScreen);
