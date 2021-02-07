import React, {ReactElement} from 'react';
import {Image, View} from 'react-native';
import {styles} from './video-item.styles';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import {VideoItemProps} from './video-item.interface';
import {COLOR_END, COLOR_START, DISLIKE_COLOR, LIKE_COLOR} from '../../const/colors.const';

const VideoItem = ({dislikeOpacity, id, img, likeOpacity}: VideoItemProps): ReactElement =>
    <View style={styles.item}>
        {likeOpacity && <Animated.View
            style={[styles.icon, styles.leftIcon, likeOpacity]}>
            <Icon
                name='heart'
                size={70}
                color={LIKE_COLOR} />
        </Animated.View>}
        {dislikeOpacity && <Animated.View
            style={[styles.icon, styles.rightIcon, dislikeOpacity]}>
            <Icon
                name='close'
                size={70}
                color={DISLIKE_COLOR} />
        </Animated.View>}
        <LinearGradient
            colors={[COLOR_START, COLOR_END]}
            style={styles.linearGradient}  />
        <Image
            key={id}
            source={img}
            style={styles.image} />
    </View>;

export default VideoItem;
