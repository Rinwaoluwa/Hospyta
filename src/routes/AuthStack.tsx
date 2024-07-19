import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {WelcomScreen} from "../screens/onboarding/WelcomeScreen";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default AuthStack;
