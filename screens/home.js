import React, { useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Avatar,
  ActivityIndicator
} from "react-native";
import { Card, useTheme, Button, Title, Text } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadSpecialOffer } from "../reducers/homeReducer";
import { scrollInterpolator, animatedStyles } from "../util/animations";
import CartScreen from "./cart";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 2);

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const specials = useSelector((state) => state.home.specials);
  const loadingSpecials = useSelector((state) => state.home.loading);
  useEffect(() => {
    dispatch(loadSpecialOffer(20));
  }, []);

  const styles = StyleSheet.create({
    carouselContainer: {
      marginTop: 30
    },
    itemContainer: {
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.primary,
      borderRadius: 5
    },
    itemLabel: {
      color: "white",
      fontSize: 24
    },
    counter: {
      marginTop: 25,
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center"
    },
    card: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.dark
        ? theme.colors.primary
        : theme.colors.background
    },
    titleContainer: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      paddingTop: 12
    },
    cardTitle: {
      color: theme.dark ? theme.colors.accent : theme.colors.textOverWhite
    },
    title: {
      fontSize: 30,
      color: theme.dark ? theme.colors.white : theme.colors.primary
    },
    image: {
      height: 190,
      marginBottom: 5
    },
    textView: {
      color: "#FFF",
      paddingBottom: 20
    },
    text: {
      color: "#FFF"
    },
    button: {
      color: "#fff"
    },
    subtitle: {
      color: theme.dark ? "#FFF" : theme.colors.primary
    }
  });

  return (
    <ScrollView>
      <View style={styles.titleContainer}>
        <Title style={styles.title}>Best sellers</Title>
      </View>
      <Carousel
        data={specials}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              {loadingSpecials && (
                <ActivityIndicator
                  animating={true}
                  color={theme.colors.white}
                  size={50}
                />
              )}
              {specials && !loadingSpecials && (
                <Card style={styles.card} theme={theme}>
                  <Card.Content>
                    <Card.Title
                      title={item.title}
                      subtitle={`By ${item.author}`}
                      titleStyle={styles.cardTitle}
                      subtitleStyle={styles.subtitle}
                    />
                    <Card.Cover
                      style={styles.image}
                      source={{ uri: item.book_image }}
                    />
                    <Card.Content styles={styles.textView}>
                      <Text styles={styles.text}>
                        {item.description.slice(0, 50) + "..."}
                      </Text>

                      <Text>{"Price: $" + item.price}</Text>
                      <Text>{"Rank: " + item.rank}</Text>
                    </Card.Content>
                    <Card.Actions>
                      <Button
                        color={
                          theme.dark
                            ? theme.colors.accent
                            : theme.colors.primary
                        }
                        onPress={() =>
                          navigation.navigate("BookScreen", {
                            book: item
                          })
                        }
                      >
                        See more
                      </Button>
                    </Card.Actions>
                  </Card.Content>
                </Card>
              )}
            </View>
          );
        }}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
      />
    </ScrollView>
  );
};

export default HomeScreen;
