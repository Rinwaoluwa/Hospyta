import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {FLEX} from './src/utils/constants';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/design-system/theme/theme';
import { WelcomScreen } from './src/screens/onboarding/WelcomeScreen';
import SignIn from './src/screens/SignIn';
import { PaperProvider } from 'react-native-paper';
import SignUp from './src/screens/SignUp';
import MainApp from './src/screens/MainApp';

export default function App() {
  return (
    <SafeAreaView style={FLEX}>
      <StatusBar style='light' />
      <ThemeProvider theme={theme}>
        <PaperProvider>
        {/* <WelcomScreen /> */}
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* <MainApp /> */}
      </PaperProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
}

