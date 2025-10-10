import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const ModuleListScreen = () => {
  return (
    //Instalisation
    //state
    //handlers
    //view
    <View style={styles.container}>
      <Text> List </Text>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ModuleListScreen;
