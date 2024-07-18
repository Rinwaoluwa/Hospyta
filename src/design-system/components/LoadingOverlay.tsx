import {StyleSheet, View, ActivityIndicator, Dimensions} from 'react-native';
import React from 'react';
import { useAppTheme } from '../theme/theme';

const LoadingOverlay = () => {
  const theme = useAppTheme();
  return (
    <View style={{...styles.container, backgroundColor: theme.colors.overlay}}>
      <ActivityIndicator size="large" color={theme.colors.blue} />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
