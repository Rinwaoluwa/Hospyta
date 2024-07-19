import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainApp from "../screens/MainApp";
import Schedule from "../screens/ComingSoon";
import Shop from "../screens/ComingSoon";
import Profile from "../screens/ComingSoon";
import { useAppDispatch } from "../utils/redux/hooks";
import { setIsAuthenticated } from "../utils/redux/slices/auth-tracker";
import { useCallback } from "react";
import Icon from "../assets/svgs/icon";

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function DrawerNavigator() {
  const dispatch = useAppDispatch();
  const logout = useCallback(() => dispatch(setIsAuthenticated(false)), []);
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Wallet"
        component={MainApp}
        options={{
          drawerIcon: () => <Icon name="wallet" />,
        }}
      />
      <Drawer.Screen
        name="Track Order"
        component={Schedule}
        options={{
          drawerIcon: () => <Icon name="location" />,
        }}
      />
      <Drawer.Screen
        name="My Post"
        component={Shop}
        options={{
          drawerIcon: () => <Icon name="edit" />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Shop}
        options={{
          drawerIcon: () => <Icon name="setting" />,
        }}
      />
      <Drawer.Screen
        name="Live support"
        component={Profile}
        options={{
          drawerIcon: () => <Icon name="receipt" />,
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={logout}
        options={{
          drawerIcon: () => <Icon name="logout" />,
        }}
      />
    </Drawer.Navigator>
  );
}

function AppStack() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          tabBarIcon: () => <Icon name="home" />,
        }}
      />
      <BottomTab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: () => <Icon name="calender" />,
        }}
      />
      <BottomTab.Screen
        name="Community"
        component={Profile}
        options={{
          tabBarIcon: () => <Icon name="people" />,
        }}
      />
      <BottomTab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: () => <Icon name="shop" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Icon name="profile" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default AppStack;
