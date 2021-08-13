import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "react-native-paper";
import HomeStack from "./home-stack";
import ProductStack from "./product-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CartStack from "./cart-stack";

const Tab = createBottomTabNavigator();

export const BottomTabs = (props) => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: theme.dark
          ? theme.colors.accent
          : theme.colors.primary,
        tabBarActiveTintColor: theme.colors.white,
        tabBarStyle: {
          elevation: 0.5,
          borderWidth: 0,
          backgroundColor: theme.colors.backdrop
        }
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name="home"
              color={
                focused
                  ? theme.dark
                    ? theme.colors.white
                    : theme.colors.white
                  : theme.colors.accent
              }
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="ProductsTab"
        component={ProductStack}
        options={{
          tabBarLabel: "Products",
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name="book"
              color={
                focused
                  ? theme.dark
                    ? theme.colors.white
                    : theme.colors.white
                  : theme.colors.accent
              }
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartStack}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name="cart"
              color={
                focused
                  ? theme.dark
                    ? theme.colors.white
                    : theme.colors.white
                  : theme.colors.accent
              }
              size={size}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};
