import React from "react";
import { useEffect } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import {
  useTheme,
  DataTable,
  Button,
  IconButton,
  Card
} from "react-native-paper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message";
import {
  addProductToCart,
  deleteProductFromCart,
  updateRemoveStatus
} from "../reducers/cartReducer";
import { useState } from "react";

const CartScreen = ({ route, navigation }) => {
  const { colors } = useTheme();
  const theme = useTheme();
  const cart = useSelector((state) => state.cart.cart);
  const removeSuccess = useSelector((state) => state.cart.removeSuccess);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    let timeout = null;
    if (removeSuccess) {
      Toast.show({
        text1: "Remove Success",
        text2: "Item removed successfully 👋"
      });
      timeout = setTimeout(() => {
        dispatch(updateRemoveStatus(false));
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [removeSuccess]);

  useEffect(() => {
    if (cart) {
      let total = 0.0;

      cart.map((product) => {
        total += parseFloat(product.book.price) * product.amount;
      });
      setTotal(total);
    }
  }, [cart]);

  const handleRemoveItem = (title) => {
    dispatch(deleteProductFromCart(title));
  };

  const handleChangeValue = (value, product) => {
    if (value === 1) {
      dispatch(addProductToCart({ book: product.book, amount: value }));
    } else {
      if (value === -1 && product.amount > 1)
        dispatch(addProductToCart({ book: product.book, amount: value }));
      else dispatch(deleteProductFromCart(product.book.title));
    }
  };

  const styles = StyleSheet.create({
    button: {
      flexWrap: "nowrap",
      flexDirection: "row"
    },
    row: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center"
    },
    cell: {
      justifyContent: "center",
      alignItems: "center"
    }
  });
  return (
    <ScrollView>
      <Card>
        <Card.Title title="Total to paid:"></Card.Title>
        <Card.Content>
          <Text>{`${total.toFixed(2)}`}</Text>
        </Card.Content>
      </Card>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.cell}>Book</DataTable.Title>
          <DataTable.Title style={styles.cell}>Product Cost</DataTable.Title>
          <DataTable.Title style={styles.cell}>Amount</DataTable.Title>
          <DataTable.Title style={styles.cell}>Operations</DataTable.Title>
        </DataTable.Header>
        {cart &&
          cart.map((item, index) => {
            return (
              <DataTable.Row
                key={index}
                style={{
                  backgroundColor:
                    index % 2 == 0 ? "rgba(95, 0, 231,0.3)" : "white"
                }}
                theme={theme}
              >
                <DataTable.Cell style={styles.cell}>
                  {item.book.title}
                </DataTable.Cell>
                <DataTable.Cell style={styles.cell}>
                  {(parseFloat(item.book.price) * item.amount).toFixed(2)}
                </DataTable.Cell>
                <DataTable.Cell style={styles.cell}>
                  {item.amount}
                </DataTable.Cell>
                <DataTable.Cell style={styles.cell}>
                  <View style={styles.button}>
                    <IconButton
                      color={theme.colors.primary}
                      icon="minus"
                      size={13}
                      onPress={() => {
                        handleChangeValue(-1, item);
                      }}
                    />
                    <IconButton
                      color={theme.colors.primary}
                      icon="plus"
                      size={13}
                      onPress={() => {
                        handleChangeValue(1, item);
                      }}
                    />
                    <IconButton
                      color={theme.colors.primary}
                      icon="trash-can"
                      size={13}
                      onPress={() => {
                        handleRemoveItem(item.book.title);
                      }}
                    />
                  </View>
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}
      </DataTable>
    </ScrollView>
  );
};

export default CartScreen;
