import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme, Button } from "react-native-paper";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Header;
