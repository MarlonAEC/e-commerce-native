import React from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { useTheme, Text, Title, Button, Portal } from "react-native-paper";
import moment from "moment";
import AddToCartModal from "../components/add-to-cart-modal";
import { useState } from "react";
import { useEffect } from "react";

const BookScreen = ({ route, navigation, bookInfo }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  const toggleModal = () => {
    setVisibleModal(!visibleModal);
  };
  const theme = useTheme();
  const { book } = bookInfo ? bookInfo : route.params;
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      color: theme.dark ? theme.colors.accent : theme.colors.primary,
      margin: 10
    },
    button: {
      flex: 1,
      justifyContent: "center",
      margin: 20
    },
    price: {
      fontSize: 18,
      marginLeft: 15,
      marginRight: 15
    },
    text: {
      fontSize: 18,
      marginLeft: 15,
      marginRight: 15
    },
    strong: {
      fontWeight: "bold"
    },
    containerStyle: {
      backgroundColor: "white",
      margin: 20,
      padding: 20
    },
    textView: {
      margin: 20
    }
  });
  return (
    <ScrollView>
      <View style={styles.image}>
        <Title style={styles.title}>{book.title}</Title>
        <Image
          source={{ uri: book.book_image }}
          style={{
            width: book.book_image_width,
            height: book.book_image_height,
            marginTop: 20
          }}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>
          <Text style={styles.strong}>Author: </Text>
          {`${book.author}`}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.strong}>Description:</Text>{" "}
          {`${book.description ? book.description : "No description provided"}`}
        </Text>
        <Text style={styles.price}>
          <Text style={styles.strong}>Price: </Text>
          {`$${book.price}`}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.strong}>Created: </Text>
          {`${moment(book.created_date).fromNow()}`}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.strong}>Primary ISBN10: </Text>
          {`${book.primary_isbn10}`}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.strong}>Primary ISBN13: </Text>
          {`${book.primary_isbn13}`}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.strong}>Publisher: </Text>
          {`${book.publisher}`}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.strong}>Rank: </Text>
          {`${book.rank}`}
        </Text>
      </View>
      <Portal>
        <AddToCartModal
          visible={visibleModal}
          toggleModal={toggleModal}
          containerStyle={styles.containerStyle}
          book={book}
          navigation={navigation}
        />
      </Portal>
      <Button
        icon="cart-plus"
        color={theme.dark ? theme.colors.accent : theme.colors.primary}
        labelStyle={{
          color: theme.colors.white
        }}
        mode="contained"
        style={styles.button}
        onPress={toggleModal}
      >
        <Text style={{ color: "#FFF" }}>Add to cart</Text>
      </Button>
    </ScrollView>
  );
};

export default BookScreen;
