import { StyleSheet, ScrollView } from "react-native";
import ModuleItem from "../modules/Moduleitem";

const ModuleList = ({ modules, onSelect }) => {
  //Instalisation
  //state
  //handlers
  //view
  return (
    <ScrollView style={styles.container}>
      {modules.map((module) => {
        return (
          <ModuleItem
            Key={module.ModuleCode}
            module={module}
            onSelect={onSelect}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ModuleList;
