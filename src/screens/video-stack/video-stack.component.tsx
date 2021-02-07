import React, {Component, ReactElement} from 'react';
import {View} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Animated, {AnimatedNode, Clock, concat, interpolate} from 'react-native-reanimated';
import {VideoStackProps, VideoStackState} from './video-stack.interface';
import {springAnimation} from '../../helpers/spring-animation';
import {toRadians} from '../../helpers/radians';
import VideoItem from '../video-item/video-item.component';
import {styles} from './video-stack.styles';
import {heightDimension, widthDimension} from '../../helpers/dimensions';
import VideosService from '../../services/videos.service';

const {add, and, call, clockRunning, cond, event, eq, greaterThan, Extrapolate, lessThan, multiply, neq, set, stopClock, Value} = Animated;

class VideoStack extends Component<VideoStackProps, VideoStackState> {
    private readonly videosService: VideosService = VideosService.getInstance();
    private translationX = new Value(0);
    private translationY = new Value(0);
    private translateX: AnimatedNode;
    private translateY: AnimatedNode;
    private velocityX = new Value(0);
    private offsetY = new Value(0);
    private offsetX = new Value(0);
    private gestureState = new Value(State.UNDETERMINED);
    private onGestureStateChange = event([{
        nativeEvent: {
            translationX: this.translationX,
            translationY: this.translationY,
            velocityX: this.velocityX,
            state: this.gestureState
        }}], {
        useNativeDriver: true
    });
    private readonly height = heightDimension();
    private readonly width = widthDimension();
    private readonly rotatedWidth = this.width * Math.sin(toRadians(75 )) + this.height * Math.sin(toRadians(15));

    public state = {
        videos: this.props.videos
    };

    public constructor(props: VideoStackProps) {
        super(props);
        this.init();
    }

    public onSwiped = ([x]: number[]): void => {
        const {videos: [lastVideo, ...videos]} = this.state;
        const {id} = lastVideo;

        if (x > 0) {
            this.videosService.like(id);
        } else {
            this.videosService.dislike(id);
        }

        this.setState({videos}, this.init);
    };

    public init = (): void => {
        const clockX = new Clock();
        const clockY = new Clock();
        const {rotatedWidth, translationX, translationY, velocityX, gestureState, offsetY, offsetX, width} = this;
        gestureState.setValue(State.UNDETERMINED);
        translationX.setValue(0);
        translationY.setValue(0);
        velocityX.setValue(0);
        offsetY.setValue(0);
        offsetX.setValue(0);

        const finalTranslateX = add(translationX, multiply(0.2, velocityX));
        const translationThreshold = width / 4;
        const snapPoint = cond(
            lessThan(finalTranslateX, -translationThreshold),
            -rotatedWidth,
            cond(greaterThan(finalTranslateX, translationThreshold), rotatedWidth, 0),
        );

        this.translateY = cond(
            eq(gestureState, State.END),
            [
                set(translationY, springAnimation(clockY, translationY, 0)),
                set(offsetY, translationY),
                translationY
            ],
            cond(eq(gestureState, State.BEGAN), [stopClock(clockY), translationY], translationY)
        );
        this.translateX = cond(
            eq(gestureState, State.END),
            [
                set(translationX, springAnimation(clockX, translationX, snapPoint)),
                set(offsetX, translationX),
                cond(and(eq(clockRunning(clockX), 0), neq(translationX, 0)), [
                    call([translationX], this.onSwiped)
                ]),
                translationX
            ],
        cond(eq(gestureState, State.BEGAN), [stopClock(clockX), translationX], translationX)
        );
    };

    public render(): ReactElement {
        const {onGestureStateChange, translateY, translateX, width} = this;
        const {videos: [lastVideo, ...restVideos]} = this.state;
        const rotateZ = concat(interpolate(translateX, {
            inputRange: [-width / 2, width / 2],
            outputRange: [15, -15],
            extrapolate: Extrapolate.CLAMP
        }), 'deg');
        const transformStyles = {
            transform: [
                {translateY},
                {translateX},
                {rotateZ}
            ]
        };
        const likeOpacity = {opacity: interpolate(translateX, {
            inputRange: [0, width / 4],
            outputRange: [0, 1]
        })};
        const dislikeOpacity = {opacity: interpolate(translateX, {
            inputRange: [-width / 4, 0],
            outputRange: [1, 0]
        })};

        return <View style={styles.container}>
            {restVideos.reverse().map((video): ReactElement =>
                <VideoItem {...video} key={video.id}/>
            )}
            <PanGestureHandler
                minDist={10}
                failOffsetY={[-10, 10]}
                onHandlerStateChange={onGestureStateChange}
                {...{onGestureEvent: onGestureStateChange}}>
                    {lastVideo ? <Animated.View style={[styles.frontItem, transformStyles]}>
                        <VideoItem
                            {...lastVideo}
                            likeOpacity={likeOpacity}
                            dislikeOpacity={dislikeOpacity}
                            key={lastVideo.id} />
                    </Animated.View> : <View />}
            </PanGestureHandler>
        </View>;
    }
}

export default VideoStack;
