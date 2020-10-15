import React, {ReactElement} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './navbar.styles';
import {NavbarItems} from '../../const/navbar-items.const';

const Navbar = ({state, descriptors, navigation}) => {
    if (!state || descriptors[state?.routes[state.index].key].options.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={styles.container}>
            {state.routes.map((route, index): ReactElement => {
                const {name, size, color} = NavbarItems[index];
                const {options} = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = (): void => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = (): void => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole={'button'}
                        accessibilityState={isFocused ? {selected: true} : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.item}
                        key={name}
                    >
                        <Icon name={name} size={size} color={isFocused ? '#673ab7' : color}/>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default Navbar;
