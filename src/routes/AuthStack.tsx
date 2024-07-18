import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomScreen} from '../screens/onboarding/WelcomeScreen';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';


const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomScreen} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SIgnUp" component={SignUp} />
        </Stack.Navigator>
    )
}

export default AuthStack;