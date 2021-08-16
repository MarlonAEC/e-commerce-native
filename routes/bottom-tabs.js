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
        tabBarInactiveTintColor: "rgba(95,0,231, 0.6)",
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
          tabBarInactiveBackgroundColor: theme.dark //ok
            ? theme.colors.primary
            : theme.colors.background,
          tabBarInactiveTintColor: theme.dark
            ? theme.colors.white
            : theme.colors.disabled,
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name="home"
              color={
                focused
                  ? theme.dark
                    ? theme.colors.white
                    : theme.colors.white
                  : theme.dark
                  ? theme.colors.white
                  : theme.colors.disabled
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
          tabBarInactiveBackgroundColor: theme.dark //ok
            ? theme.colors.primary
            : theme.colors.background,
          tabBarInactiveTintColor: theme.dark
            ? theme.colors.white
            : theme.colors.disabled,
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name="book"
              color={
                focused
                  ? theme.dark
                    ? theme.colors.white
                    : theme.colors.white
                  : theme.dark
                  ? theme.colors.white
                  : theme.colors.disabled
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
          tabBarInactiveTintColor: theme.dark
            ? theme.colors.white
            : theme.colors.disabled,
          tabBarInactiveBackgroundColor: theme.dark //ok
            ? theme.colors.primary
            : theme.colors.background,
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name="cart"
              color={
                focused
                  ? theme.dark
                    ? theme.colors.white
                    : theme.colors.white
                  : theme.dark
                  ? theme.colors.white
                  : theme.colors.disabled
              }
              size={size}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};
