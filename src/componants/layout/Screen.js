import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export const screen = ({ children }) => {
  return (
    //Instalisation
    //state
    //handlers
    //view
    <View style={styles.screen}>
      {children}
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default screen;
