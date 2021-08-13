import React from "react";
import { StyleSheet, Text, ScrollView, Button } from "react-native";
import { useTheme } from "react-native-paper";
import Wishes from "../components/wishes";

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <ScrollView>
      <Text>Home Screen</Text>
      <Button
        title="Go Shop"
        onPress={() => navigation.navigate("ShopScreen")}
      />
    </ScrollView>
  );
};

export default HomeScreen;
