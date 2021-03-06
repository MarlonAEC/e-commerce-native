import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { applyMiddleware, createStore } from "redux";
import { Provider as StoreProvider } from "react-redux";
import configureStore from "./store";
import rootReducer from "./reducers";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  DefaultTheme
} from "@react-navigation/native";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider
} from "react-native-paper";
import merge from "deepmerge";
import { PreferencesContext } from "./util/preferences-context";
import { BottomTabs } from "./routes/bottom-tabs";
import thunk from "redux-thunk";
import Toast from "react-native-toast-message";

const store = configureStore();

const MyPaperDefaultTheme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: "#5F00E7",
    //backdrop: "#5F00E7",
    //accent: "#F1E3D3",
    //text: "#000",
    white: "#fff",
    textOverWhite: "#5F00E7"
  }
};

const MyNavigationDefaultTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme,
    primary: "#5F00E7",
    //backdrop: "#FFF",
    //accent: "#F1E3D3",
    text: "#000",
    white: "#fff",
    textOverWhite: "#5F00E7"
  }
};

const MyNavigationDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme,
    primary: "#555",
    text: "#FFF",
    accent: "#BB86FC",
    //background: "#292929",
    white: "#FFF"
  }
};

const MyPaperDarkTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: "#292929",
    accent: "#BB86FC",
    //background: "#292929",
    white: "#FFF"
  }
};

const CombinedDefaultTheme = merge(
  MyPaperDefaultTheme,
  MyNavigationDefaultTheme
);
const CombinedDarkTheme = merge(MyPaperDarkTheme, MyNavigationDarkTheme);

export default function App() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);
  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <StoreProvider store={store}>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <BottomTabs />
          </NavigationContainer>
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </PaperProvider>
      </PreferencesContext.Provider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
