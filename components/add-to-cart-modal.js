import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image, Alert } from "react-native";
import { useTheme, Title, Button, Modal, Banner } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../reducers/cartReducer";
import Quantity from "./quantity";
import Toast from "react-native-toast-message";

const AddToCartModal = ({
  visible,
  toggleModal,
  containerStyle,
  book,
  navigation
}) => {
  const [amount, setAmount] = useState("0");
  const [bannerVisible, setBannerVisible] = useState(false);
  const [errorAmount, setErrorAmount] = useState(false);

  const theme = useTheme();
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (amount > 0) {
      dispatch(addProductToCart({ book, amount }));

      toggleModal();
      Toast.show({
        text1: "Add Success",
        text2: "Item added successfully 👋"
      });
    } else {
      setBannerVisible(true);
    }
  };

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
    },
    centered: {
      justifyContent: "center",
      alignItems: "center"
    },
    texts: {
      padding: 10
    },
    strong: {
      fontWeight: "bold"
    },
    containerStyle: {
      backgroundColor: theme.dark
        ? theme.colors.primary
        : theme.colors.background
    }
  });
  return (
    <Modal
      visible={visible}
      onDismiss={toggleModal}
      contentContainerStyle={containerStyle}
    >
      <Banner
        visible={bannerVisible}
        theme={theme}
        actions={[
          {
            label: "OK",
            onPress: () => setBannerVisible(false)
          }
        ]}
        icon="alert-box"
      >
        Sorry but in order to add to cart you need at least order one book
      </Banner>
      <View style={styles.centered}>
        <Title>{book.title}</Title>
        <Image
          source={{ uri: book.book_image }}
          style={{
            width: 200,
            height: 200
          }}
        />
      </View>
      <View style={styles.centered.texts}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.strong}>Unit Price: </Text>
          <Text style={{ color: "#B12704" }}>{`$${book.price}`}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.strong}>Total Price: </Text>
          <Text style={{ color: "#B12704" }}>{`$${(
            parseFloat(amount) * parseFloat(book.price)
          ).toFixed(2)}`}</Text>
        </View>
        <View style={styles.quantityView}>
          <Quantity
            style={styles.input}
            value={amount}
            numberOfLines={1}
            onChangeText={(value) => setAmount(value)}
            keyboardType="numeric"
          />
        </View>
        <Button
          icon="cart-plus"
          mode="contained"
          color={theme.dark ? theme.colors.accent : theme.colors.primary}
          labelStyle={{
            color: theme.colors.white
          }}
          onPress={() => handleAddToCart()}
        >
          <Text>Add to cart</Text>
        </Button>
      </View>
    </Modal>
  );
};

export default AddToCartModal;
