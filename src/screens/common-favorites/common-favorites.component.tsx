import React, {ReactElement} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {AppState} from '../../store/configureStore';
import {UserFirebase} from '../../_interfaces/user.interface';
import {styles} from './common-favorites.styles';

const CommonFavoritesScreen = ({user}: {user: UserFirebase}): ReactElement => {
    return <React.Fragment>
        <SafeAreaView/>
        <View style={styles.container}>
            <Text>Common Favorites!</Text>
        </View>
    </React.Fragment>
};

const mapStateToProps = ({user}: AppState) => ({
    user: user.user
});

export default connect(mapStateToProps)(CommonFavoritesScreen);
