import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const  BottomTab = createBottomTabNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator>

        </Drawer.Navigator>
    )
}

function TabNavigator() {
    return (
        <BottomTab.Navigator>

        </BottomTab.Navigator>
    )
}

function AppStack() {}

export default AppStack();