import React, {ReactElement} from 'react';
import {SafeAreaView, View} from 'react-native';
import Avatar from '../../components/avatar/avatar.component';
import LoginComponent from '../../components/login/login.component';
import {connect, useSelector} from 'react-redux';
import {AppState} from '../../store/configureStore';
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
const HomeScreen = (): ReactElement => {
    const user = useSelector(({user}: AppState) => user.user);

    return <React.Fragment>
        <SafeAreaView/>
        <View style={styles.container}>
            {user?.email ? <View style={styles.avatarWrapper}>
                <Avatar user={user}/>
            </View> : <LoginComponent/>}
            <VideoStack videos={videos}/>
            <Navbar/>
        </View>
    </React.Fragment>;
};

export default connect()(HomeScreen);
