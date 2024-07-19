import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainApp from '../screens/MainApp';
import Schedule from '../screens/ComingSoon';
import Community from '../screens/ComingSoon';
import Shop from '../screens/ComingSoon';
import Profile from '../screens/ComingSoon';

const Drawer = createDrawerNavigator();
const  BottomTab = createBottomTabNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Wallet' component={MainApp} />
            <Drawer.Screen name='Track Order' component={Schedule} />
            <Drawer.Screen name='Settings' component={Shop} />
            <Drawer.Screen name='Live support' component={Profile} />
            <Drawer.Screen name='Logout' component={Profile} />
        </Drawer.Navigator>
    )
}

function AppStack() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name='Home' component={DrawerNavigator} />
            <BottomTab.Screen name='Schedule' component={Schedule} />
            <BottomTab.Screen name='Shop' component={Shop} />
            <BottomTab.Screen name='Profile' component={Profile} />
        </BottomTab.Navigator>
    )
}


export default AppStack;