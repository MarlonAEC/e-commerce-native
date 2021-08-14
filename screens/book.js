import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useTheme, Title, Button, Portal } from "react-native-paper";
import moment from "moment";
import AddToCartModal from "../components/add-to-cart-modal";
import { useState } from "react";

const BookScreen = ({ route, navigation }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  const toggleModal = () => {
    setVisibleModal(!visibleModal);
  };
  const theme = useTheme();
  const { book } = route.params;
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
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
    }
  });
  return (
    <ScrollView>
      <View style={styles.image}>
        <Title>{book.title}</Title>
        <Image
          source={{ uri: book.book_image }}
          style={{
            width: book.book_image_width,
            height: book.book_image_height
          }}
        />
      </View>
      <View>
        <Text style={styles.text}>
          <Text style={styles.strong}>Author: </Text>
          {`${book.author}`}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.strong}>Description:</Text>{" "}
          {`${book.description}`}
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
        />
      </Portal>
      <Button
        icon="cart-plus"
        mode="contained"
        style={styles.button}
        onPress={toggleModal}
      >
        Add to cart
      </Button>
    </ScrollView>
  );
};

export default BookScreen;
