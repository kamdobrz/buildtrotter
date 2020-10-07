import React, {ReactElement} from 'react';
import {SafeAreaView, View} from 'react-native';
import Avatar from '../../components/avatar/avatar.component';
import LoginComponent from '../../components/login/login.component';
import {connect} from 'react-redux';
import {AppState} from '../../store/configureStore';
import {styles} from './home.styles';
import {HomeProps} from './home.interface';
import VideosScreen from '../videos/videos.component';

class HomeScreen extends React.Component<HomeProps> {
    public render(): ReactElement {
        const {user} = this.props;
        return <SafeAreaView style={styles.container}>
            {user?.email && <View style={styles.avatarWrapper}>
                <Avatar user={user}/>
            </View>}
            {!user?.email && <LoginComponent/>}
            <VideosScreen/>
        </SafeAreaView>;
    }
};

const mapStateToProps = ({user}: AppState) => ({
    user: user.user
});

export default connect(mapStateToProps)(HomeScreen);
