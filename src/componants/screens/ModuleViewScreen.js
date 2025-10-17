import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import FullWidthImage from "react-native-fullwidth-image";

export const ModuleViewScreen = ({ navigate, route }) => {
  //Instalisation
  const { module } = route.params;
  //state
  //handlers
  //view
  return (
    <Screen>
      <View style={styles.container}>
        <FullWidthImage
          source={{ uri: module.ModuleImage }}
          style={styles.image}
        />

        <View style={styles.infoTray}>
          <Text style={styles.boldText}>
            {module.ModuleCode} {module.ModuleName}
          </Text>
          <Text style={styles.text}>{module.ModuleLevel}</Text>
          <Text style={styles.text}>
            {module.ModuleLeaderName}{" "}
            <Text style={styles.dimText}> (Module Leader)</Text>
          </Text>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  image: {
    borderRadius: 3,
  },

  infoTray: {
    gap: 5,
  },
  text: {
    fontsize: 16,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dimText: {
    color: "grey",
  },
});

export default ModuleViewScreen;
