import {StyleProp, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

import hospyta from "./icons/hospyta-logo.svg";
import google from "./icons/google-logo.svg";
import locked from "./icons/locked-lock.svg";
import unlocked from "./icons/unlocked-lock.svg";
import backArrow from "./icons/backArrow.svg";
import hamburger from "./icons/hamburger.svg";
import calender from "./icons/calendar.svg";
import home from "./icons/home.svg";
import profile from "./icons/profile.svg";
import people from "./icons/people.svg";
import shop from "./icons/shop.svg";
import wallet from "./icons/wallet.svg";
import setting from "./icons/setting.svg";
import location from "./icons/location.svg";
import logout from "./icons/logout.svg";
import edit from "./icons/edit.svg";
import receipt from "./icons/receipt-edit.svg"

export const ICONS = {
    hospyta,
    google,
    locked,
    unlocked,
    backArrow,
    hamburger,
    calender,
    home,
    shop,
    profile,
    people,
    wallet,
    setting,
    location,
    edit,
    logout,
    receipt
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
