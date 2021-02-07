import React, {ReactElement} from 'react';
import {Image, View} from 'react-native';
import {styles} from './video-item.styles';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import {VideoItemProps} from './video-item.interface';

const LIKE_COLOR = '#0a940a';
const DISLIKE_COLOR = '#b11010';
const COLOR_START = 'rgba(0, 0, 0, 0.8)';
const COLOR_END = 'rgba(0, 0, 0, 0)';

const VideoItem = ({dislikeOpacity, id, img, likeOpacity}: VideoItemProps): ReactElement =>
    <View style={styles.item}>
        {likeOpacity && <Animated.View style={[styles.icon, styles.leftIcon, likeOpacity]}>
            <Icon name="heart" size={70} color={LIKE_COLOR} />
        </Animated.View>}
        {dislikeOpacity && <Animated.View style={[styles.icon, styles.rightIcon, dislikeOpacity]}>
            <Icon name="close" size={70} color={DISLIKE_COLOR} />
        </Animated.View>}
        <LinearGradient
            colors={[COLOR_START, COLOR_END]}
            style={styles.linearGradient} ></LinearGradient>
        <Image
            key={id}
            source={img}
            style={styles.image} />
    </View>;

export default VideoItem;
