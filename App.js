import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Provider as StoreProvider } from "react-redux";
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

const MyPaperDefaultTheme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: "#5F00E7",
    backdrop: "#5F00E7",
    accent: "#F1E3D3",
    text: "#000",
    white: "#fff"
  }
};

const MyNavigationDefaultTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme,
    primary: "#5F00E7",
    backdrop: "#FFF",
    accent: "#F1E3D3",
    text: "#000",
    white: "#fff"
  }
};

const MyNavigationDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme,
    primary: "#292929",
    accent: "#BB86FC",
    text: "#BB86FC",
    backdrop: "#292929",
    white: "#FFF"
  }
};

const MyPaperDarkTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: "#BB86FC",
    accent: "#BB86FC",
    text: "#BB86FC",
    backdrop: "#292929",
    white: "#FFF"
  }
};

const CombinedDefaultTheme = merge(
  MyPaperDefaultTheme,
  MyNavigationDefaultTheme
);
const CombinedDarkTheme = merge(MyPaperDarkTheme, MyNavigationDarkTheme);

const store = createStore(rootReducer);

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
