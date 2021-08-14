import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import HomeScreen from "../screens/home";
import ShopScreen from "../screens/shop";
import ProductsScreen from "../screens/products";
import Header from "../shared/header";
import BookScreen from "../screens/book";

const Stack = createNativeStackNavigator();

const HomeStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      headerMode="screen"
      screenOptions={{
        header: (props) => <Header {...props} />
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
          return { headerTitle: routeName };
        }}
      />
      <Stack.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "Shop";
          return { headerTitle: routeName };
        }}
      />
      <Stack.Screen
        name="BookScreen"
        component={BookScreen}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "Book";
          return { headerTitle: routeName };
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
