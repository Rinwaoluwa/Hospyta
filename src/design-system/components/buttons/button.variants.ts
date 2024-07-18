import {TextStyle, ViewStyle} from 'react-native';
import {useAppTheme} from '../../theme/theme';


/**
 * The variations of screens.
 */
export type ButtonVariant = 'primary' | 'secondary' | 'disabled';

/**
 * All the variations of screens.
 */
export function useButtonVariants(variant: ButtonVariant) {
  const {colors} = useAppTheme();
  const variants = {
    primary: {
      outer: {
        backgroundColor: colors.blue,
      } as ViewStyle,
      inner: {
        color: colors.blue,
      } as TextStyle,
    },
    secondary: {
      outer: {
        backgroundColor: colors.transparent,
        borderWidth: 5,
        borderColor: colors.white,
      } as ViewStyle,
      inner: {
        color: colors.transparent,
      } as TextStyle,
    },
    disabled: {
      outer: {
        backgroundColor: colors.grey3,
      } as ViewStyle,
      inner: {
        color: colors.grey1,
      } as TextStyle,
    },
  };
  return variants[variant];
}
