import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useTheme, Title, Button, Modal } from "react-native-paper";
import Quantity from "./quantity";

const AddToCartModal = ({ visible, toggleModal, containerStyle, book }) => {
  const [amount, setAmount] = useState("0");
  const theme = useTheme();
  const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      color: theme.colors.primary,
      padding: 10,
      fontSize: 20
    },
    quantityView: {
      width: "100%"
    }
  });
  return (
    <Modal
      visible={visible}
      onDismiss={toggleModal}
      contentContainerStyle={containerStyle}
    >
      <View>
        <Title>{book.title}</Title>
        <Image
          source={{ uri: book.book_image }}
          style={{
            width: 200,
            height: 200
          }}
        />
        <Text>
          <Text style={styles.strong}>Unit Price: </Text>
          {`$${book.price}`}
        </Text>
        <Text>
          <Text style={styles.strong}>Total Price: </Text>
          {`$${(parseFloat(amount) * parseFloat(book.price)).toFixed(2)}`}
        </Text>
        <View style={styles.quantityView}>
          <Quantity
            style={styles.input}
            value={amount}
            numberOfLines={1}
            onChangeText={(value) => setAmount(value)}
            keyboardType="numeric"
          />
        </View>
        <Button icon="cart-plus" mode="contained" onPress={() => {}}>
          Add to cart
        </Button>
      </View>
    </Modal>
  );
};

export default AddToCartModal;
