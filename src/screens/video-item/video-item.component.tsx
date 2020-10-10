import React, {ReactElement} from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import {styles} from './video-item.styles';

export const VideoItem = ({id, img}: {id: string, img: ImageSourcePropType}): ReactElement =>
    <Image
        key={id}
        source={img}
        style={styles.item} />;
