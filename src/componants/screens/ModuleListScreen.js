import { StyleSheet, ScrollView } from "react-native";
import Screen from "../layout/Screen";
import initalmodules from "../../Data/modules";
import ModuleList from "../entity/modules/ModuleList";

export const ModuleListScreen = () => {
  //Instalisation
  const modules = initalmodules;
  //state
  //handlers
  const handleSelect = (module) => alert(`Item ${module.ModuleCode} Selcted`);
  //view
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
