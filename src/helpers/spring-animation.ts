import {Adaptable, AnimatedNode, Clock, clockRunning, cond, set, spring, startClock, stopClock, Value} from 'react-native-reanimated';

export const springAnimation = (clock: Clock, value: Adaptable, dest: AnimatedNode<number>) => {
    const state = {
        finished: new Value(0),
        velocity: new Value(0),
        position: new Value(0),
        time: new Value(0)
    };
    const config = {
        damping: 20,
        mass: 1,
        stiffness: 100,
        overshootClamping: false,
        restSpeedThreshold: 1000,
        restDisplacementThreshold: 100,
        toValue: new Value(0)
    };

    return [
        cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.velocity, 0),
            set(state.position, value),
            set(config.toValue, dest),
            startClock(clock)
        ]),
        spring(clock, state, config),
        cond(state.finished, stopClock(clock)),
        state.position
    ];
};
