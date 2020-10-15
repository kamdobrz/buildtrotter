import {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';

export interface VideoItemProps {
    id: string,
    img: ImageSourcePropType,
    dislikeOpacity?: StyleProp<ViewStyle>
    likeOpacity?: StyleProp<ViewStyle>
}
