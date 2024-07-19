import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from '../utils/redux/hooks';
import {RootState} from '../utils/redux/store';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Router = () => {
    const {isAuthenticated} = useAppSelector((state: RootState) => state.authTracker);
    return (
      <NavigationContainer
        >
          {isAuthenticated ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    );
  };

  export default Router;
