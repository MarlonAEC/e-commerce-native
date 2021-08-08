import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from '../screens/home'

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;