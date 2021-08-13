import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  useTheme,
  Button,
  Appbar,
  TouchableRipple,
  Toolbar,
  Switch
} from "react-native-paper";
import { PreferencesContext } from "../util/preferences-context";

const Header = (props) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    header: {
      backgroundColor: theme.colors.primary,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 20
    }
  });

  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
  return (
    <Appbar.Header style={styles.header} theme={theme}>
      {props.previous ? (
        <Appbar.BackAction onPress={props.navigation.goBack} />
      ) : null}
      <Appbar.Content
        title={
          props.options !== undefined ? props.options.headerTitle : props.title
        }
        color={theme.dark ? theme.colors.accent : theme.colors.white}
      />
      <TouchableRipple>
        <Switch onValueChange={() => toggleTheme()} value={isThemeDark} />
      </TouchableRipple>
    </Appbar.Header>
  );
};

export default Header;
