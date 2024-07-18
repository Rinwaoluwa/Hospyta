import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {FLEX} from './src/utils/constants';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/design-system/theme/theme';
import { WelcomScreen } from './src/screens/onboarding/WelcomeScreen';

export default function App() {
  return (
    <SafeAreaView style={FLEX}>
      <StatusBar style='light' />
      <ThemeProvider theme={theme}>
       <WelcomScreen />
      </ThemeProvider>
    </SafeAreaView>
  );
}

