import React, {ReactElement} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {AppState} from '../../store/configureStore';
import {UserFirebase} from '../../_interfaces/user.interface';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './navbar.styles';

interface NavbarItemInterface {
    color: string;
    name: string;
    size: number;
}

const navbarItems: NavbarItemInterface[] = [
    {
        color: 'black',
        name: 'movie-open',
        size: 40
    },
    {
        color: 'black',
        name: 'heart',
        size: 42
    },
    {
        color: 'black',
        name: 'account-multiple',
        size: 48
    },
];

const Navbar = ({user}: {user: UserFirebase}): ReactElement =>
        <View style={styles.container}>
            {navbarItems.map(({color, name, size}: NavbarItemInterface): ReactElement =>
                <TouchableOpacity
                activeOpacity={.7}
                style={styles.item}
                key={name}>
                    <Icon name={name} size={size} color={color} />
                </TouchableOpacity> )}
        </View>;

const mapStateToProps = ({user}: AppState) => ({
    user: user.user
});

export default connect(mapStateToProps)(Navbar);
