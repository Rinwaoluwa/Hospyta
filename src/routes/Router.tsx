import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from '../utils/redux/hooks';
import {RootState} from '../utils/redux/store';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const Router = () => {
  const {isAuthenticated} = useAppSelector((state: RootState) => state.authTracker);
  const [loaded, error] = useFonts({
    'Axiforma-Black': require('../assets/fonts/Axiforma-Black.ttf'),
    'Axiforma-Blod': require('../assets/fonts/Axiforma-Bold.ttf'),
    'Axiforma-Book': require('../assets/fonts/Axiforma-Book.ttf'),
    'Axiforma-Medium': require("../assets/fonts/Axiforma-Medium.ttf"),
    'Axiforma-Light': require("../assets/fonts/Axiforma-Light.ttf"),
    'Axiforma-Regular': require("../assets/fonts/Axiforma-Regular.ttf"),
    'GothamPro-Bold': require("../assets/fonts/GothamPro-Bold.ttf"),
    'GothamPro-Black': require("../assets/fonts/GothamPro-Black.ttf"),
    'GothamPro-Light': require("../assets/fonts/GothamPro-Light.ttf"),
    'GothamPro-Medium': require("../assets/fonts/GothamPro-Medium.ttf"),
    'GothamPro': require("../assets/fonts/GothamPro.ttf"),
    'GothamProNarrow-Bold': require("../assets/fonts/GothamProNarrow-Bold.ttf"),
    'GothamProNarrow-Medium': require("../assets/fonts/GothamProNarrow-Medium.ttf"),
    'Poppins-Bold': require("../assets/fonts/Poppins-Bold.ttf"),
    'Poppins-Light': require("../assets/fonts/Poppins-Light.ttf"),
    'Poppins-Medium':require("../assets/fonts/Poppins-Medium.ttf")

  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
