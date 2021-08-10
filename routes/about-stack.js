import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../screens/about";
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AboutScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          headerTitle: (props) => <Header title="About" />
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
