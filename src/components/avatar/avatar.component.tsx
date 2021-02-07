import React, {ReactElement} from 'react';
import {ActionSheetIOS, Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {AvatarProps} from './avatar.interface';
import {styles} from './avatar.styles';
import {AuthService} from '../../../_services/auth.service';

const logOut = (displayName: string | null): () => void =>
    (): void => {
    ActionSheetIOS.showActionSheetWithOptions(
        {
            ...displayName && {title: displayName},
            options: ['Cancel', 'Profile', 'Log out'],
            destructiveButtonIndex: 2,
            cancelButtonIndex: 0
        },
        (buttonIndex): void => {
            if (buttonIndex === 2) {
                AuthService.logOut();
            }

            if (buttonIndex === 1) {
                Alert.alert('TODO');
            }
        }
    );
};

const Avatar = ({user}: AvatarProps): ReactElement => {
    const {photoURL} = user;
    return <TouchableOpacity
        activeOpacity={0.5}
        onPress={logOut(user?.displayName)}>
        {photoURL ?
            <Image style={styles.image} source={{uri: photoURL}}/> :
            <View style={styles.textWrapper}>
                <Text style={styles.text}>ME</Text>
            </View>
        }
    </TouchableOpacity>;
};

export default Avatar;
