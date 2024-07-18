import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import LoadingOverlay from '../design-system/components/LoadingOverlay';

const Router = () => {
    const {authenticated, loading} = useAuth();
    if (loading) {
      return <LoadingOverlay />;
    }
    return (
      <NavigationContainer
        >
          {authenticated ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    );
  };
  
  export default Router;
