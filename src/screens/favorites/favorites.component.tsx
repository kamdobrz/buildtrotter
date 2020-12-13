import React, {ReactElement} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './favorites.styles';

const FavoritesScreen = (): ReactElement => <React.Fragment>
        <SafeAreaView/>
        <View style={styles.container}>
            <Text>Favorites!</Text>
        </View>
    </React.Fragment>;

export default connect()(FavoritesScreen);
