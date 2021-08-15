import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "../screens/products";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Header from "../shared/header";
import BookScreen from "../screens/book";

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductScreen"
      headerMode="screen"
      screenOptions={{
        header: (props) => <Header {...props} />
      }}
    >
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "Products";
          return { headerTitle: routeName };
        }}
      />
      <Stack.Screen
        name="ProductBookScreen"
        component={BookScreen}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "Book";
          return { headerTitle: routeName };
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductStack;
