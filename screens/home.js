import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  View,
  Avatar,
  ActivityIndicator
} from "react-native";
import { Card, useTheme, Button, Title } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadSpecialOffer } from "../reducers/homeReducer";
import { scrollInterpolator, animatedStyles } from "../util/animations";

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
      marginTop: 50
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
      height: "100%"
    },
    titleContainer: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      paddingTop: 12
    },
    cardTitle: {
      color: theme.dark ? theme.colors.text : theme.colors.textOverWhite
    },
    title: {
      fontSize: 30,
      color: "rgba(95, 0, 231, 0.5)"
    },
    image: {
      height: 160
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
