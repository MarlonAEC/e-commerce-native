import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { Button, Card, useTheme, Banner } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { clearState, getProducts } from "../reducers/productReducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import BookScreen from "./book";

const ProductsScreen = ({ navigation }) => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = React.useState(
    "paperback-nonfiction"
  );
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const listOfBooks = useSelector((state) => state.product.products);
  const [bannerVisible, setBannerVisible] = React.useState(false);
  const error = useSelector((state) => state.product.error);
  const dispatch = useDispatch();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(!showDatePicker);
    setDate(currentDate);
  };

  useEffect(() => {
    dispatch(getProducts(moment(date).format("YYYY-MM-DD"), selectedCategory));
  }, [selectedCategory, date]);
  useEffect(() => {
    if (error) setBannerVisible(true);
  }, [error]);

  const styles = StyleSheet.create({
    picker: {
      width: "60%",
      color: theme.colors.primary,
      borderColor: theme.colors.primary,
      margin: 10
    },
    pickerView: {
      elevation: 2,
      justifyContent: "center",
      alignItems: "flex-end"
    },
    banner: {
      backgroundColor: "#f8d7da"
    }
  });
  return (
    <ScrollView
      indicatorStyle={theme.dark ? "white" : "black"}
      removeClippedSubviews={true}
    >
      <Banner
        style={styles.banner}
        visible={bannerVisible}
        theme={theme}
        actions={[
          {
            label: "OK",
            onPress: () => {
              setBannerVisible(false);
              dispatch(clearState());
            }
          }
        ]}
        icon="alert-box"
      >
        {error}
      </Banner>
      <View style={styles.pickerView}>
        <Button
          icon="calendar"
          onPress={() => setShowDatePicker(!showDatePicker)}
        >
          Select Date
        </Button>
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="calendar"
            onChange={onChange}
          />
        )}
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          style={styles.picker}
          mode="dropdown"
          dropdownIconColor={"black"}
          numberOfLines={1}
        >
          <Picker.Item
            label="Paperback Nonfiction"
            value="paperback-nonfiction"
          />
          <Picker.Item
            label="Combined Print & E-Book Fiction"
            value="e-book-fiction"
          />
          <Picker.Item
            label="Combined Print & E-Book Nonfiction"
            value="combined-print-and-e-book-nonfiction"
          />
          <Picker.Item label="Hardcover Fiction" value="hardcover-fiction" />
          <Picker.Item
            label="Hardcover Nonfiction"
            value="hardcover-nonfiction"
          />
          <Picker.Item
            label="Paperback Trade Fiction"
            value="trade-fiction-paperback"
          />
          <Picker.Item
            label="Hardcover Advice(ERROR)"
            value="some-dummy-data"
          />
        </Picker>
      </View>
      <ScrollView>
        {listOfBooks &&
          listOfBooks.map((item, index) => {
            return (
              <Card style={styles.card} theme={theme} key={index}>
                <Card.Content>
                  <Card.Title
                    title={item.title}
                    subtitle={`By ${item.author}`}
                    style={styles.cardTitle}
                  />
                  <Card.Cover
                    style={styles.image}
                    source={{ uri: item.book_image }}
                  />
                  <Text>{item.description.slice(0, 50) + "..."}</Text>

                  <Text>{"Price: $" + item.price}</Text>
                  <Text>{"Rank: " + item.rank}</Text>
                  <Card.Actions>
                    <Button
                      onPress={() =>
                        navigation.navigate("ProductBookScreen", {
                          book: item
                        })
                      }
                    >
                      See more
                    </Button>
                  </Card.Actions>
                </Card.Content>
              </Card>
            );
          })}
      </ScrollView>
    </ScrollView>
  );
};

export default ProductsScreen;
