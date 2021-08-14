import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput
} from "react-native";
import { useTheme, Title, Button, Modal } from "react-native-paper";

const Quantity = (props) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    button: {
      flex: 1
    }
  });
  const checkNegative = (value) => {
    return value < 0 ? 0 : value;
  };

  return (
    <View style={styles.container}>
      <Button
        icon="minus"
        mode="contained"
        style={styles.button}
        onPress={() =>
          props.onChangeText(
            checkNegative(parseInt(props.value) - 1).toString()
          )
        }
      >
        Remove
      </Button>
      <TextInput {...props} editable maxLength={11} />
      <Button
        icon="plus"
        mode="contained"
        style={styles.button}
        onPress={() =>
          props.onChangeText((parseInt(props.value) + 1).toString())
        }
      >
        Add
      </Button>
    </View>
  );
};

export default Quantity;
