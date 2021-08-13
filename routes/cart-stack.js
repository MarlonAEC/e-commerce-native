import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import HomeScreen from "../screens/home";
import ShopScreen from "../screens/shop";
import ProductsScreen from "../screens/products";
import Header from "../shared/header";
import { BottomTabs } from "./bottom-tabs";
import CartScreen from "../screens/cart";

const Stack = createNativeStackNavigator();

const CartStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      headerMode="screen"
      screenOptions={{
        header: (props) => <Header {...props} />
      }}
    >
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "Cart";
          return { headerTitle: routeName };
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
