import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "../screens/products";
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          headerTitle: (props) => <Header title="Products" />
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductStack;
