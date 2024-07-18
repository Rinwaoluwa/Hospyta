import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Text from './Text';

interface TextInputProps extends Omit<RNTextInputProps, 'onBlur' | 'onFocus'> {
  label: string;
  name: string;
  error?: string;
  placeholder?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  control: Control<any, any>;
  editable?: boolean;
  onPress?: Function;
  onFocus?: Function;
  onBlur?: Function;
  multiline?: boolean;
  numberOfLines?: number;
  secureTextEntry?: boolean;
  style?: TextStyle;
  containerStyle?: ViewStyle;
}

export const TextInput = ({
  error,
  onBlur: pureOnBlur,
  onFocus,
  ...props
}: TextInputProps) => {

  // const {} = useAppT

  return (
    <View style={[styles.textInputContainer, props.containerStyle]}>
      <Controller
        control={props.control}
        render={({field: {onChange, onBlur, value}}) => (
          <RNTextInput
            mode="outlined"
            value={value}
            onChangeText={onChange}
            onBlur={() => (pureOnBlur ? pureOnBlur(onBlur) : onBlur())}
            left={props.left}
            right={props.right}
            outlineColor="black"
            textColor="grey"
            error={!!error}
            onFocus={() => onFocus?.()}
            autoCapitalize="none"
            editable={props?.editable}
            onPressIn={() => props.onPress?.()}
            {...props}
          />
        )}
        name={props.name}
      />
      {error ? <Text variant="error">{error}</Text> : null}
    </View>
  );
};


const styles = StyleSheet.create({
  textInputContainer: {
    marginVertical: 8,
  },
});
