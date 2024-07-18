import {StyleProp, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

import hospyta from "./icons/hospyta-logo.svg";
import google from "./icons/google-logo.svg";
import locked from "./icons/locked-lock.svg";
import unlocked from "./icons/unlocked-lock.svg";

export const ICONS = {
    hospyta,
    google,
    locked,
    unlocked,
};

export type IconName = keyof typeof ICONS;

export interface IconProps extends SvgProps {
    name: IconName;
    size?: number;
    style?: StyleProp<ViewStyle>;
    iconColor?: string;
    stroke?: string;
    iconOpacity?: number;
    strokeWidth?: number;
    focused?: boolean;
}
  
export type Props = IconProps;
