import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";
import Wishes from "../components/wishes";

const HomeScreen = () => {
  const { colors } = useTheme();
  return <ScrollView style={{ backgroundColor: colors.background }} />;
};

export default HomeScreen;
