import React from "react";
import { StyleSheet, Text, ScrollView, Button } from "react-native";
import { useTheme } from "react-native-paper";
import Wishes from "../components/wishes";

const CartScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <ScrollView>
      <Text>Cart Screen</Text>
    </ScrollView>
  );
};

export default CartScreen;
