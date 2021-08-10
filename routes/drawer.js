import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";
import React from "react";
import HomeStack from "./home-stack";
import ProductStack from "./product-stack";
import AboutStack from "./about-stack";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Products" component={ProductStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
