import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './routes/drawer';
import { createStore } from 'redux';
import {Provider as StoreProvider} from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import rootReducer from './reducers';

const store = createStore(rootReducer);
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6F61',
    accent: '#000',
    background: '#F3F6FF',
    whiteColor: '#FFF'
  },
};


export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <MyDrawer/>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
