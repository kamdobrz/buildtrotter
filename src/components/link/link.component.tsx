import React, {ReactElement} from 'react';
import {TouchableOpacity} from 'react-native';
import {LinkProps} from './link.interface';

const Link = ({children, onPress}: LinkProps): ReactElement => <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}>
        {children}
    </TouchableOpacity>;

export default Link;
