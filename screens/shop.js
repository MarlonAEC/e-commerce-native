import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";

const ShopScreen = () => {
  const { colors } = useTheme();
  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <Text>Shop Screen</Text>
    </ScrollView>
  );
};

export default ShopScreen;
