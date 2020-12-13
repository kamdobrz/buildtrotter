import React, {ReactElement} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './common-favorites.styles';

const CommonFavoritesScreen = (): ReactElement => <React.Fragment>
        <SafeAreaView/>
        <View style={styles.container}>
            <Text>Common Favorites!</Text>
        </View>
    </React.Fragment>;

export default connect()(CommonFavoritesScreen);
