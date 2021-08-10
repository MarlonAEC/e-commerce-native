import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme, Button } from 'react-native-paper';

const Wishes = () => {
    const { colors } = useTheme();
    return(
        <View style={{backgroundColor: colors.whiteColor}}>
            <Button icon='heart' mode='outlined' onPress={() =>{}}>
                <Text>Wishes</Text>
            </Button>
            <Button icon='cart' mode='outlined' onPress={() =>{}}>
                <Text>Cart</Text>
            </Button>
        </View>
    )
}

export default Wishes;