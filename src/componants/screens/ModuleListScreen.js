import { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Screen from "../layout/Screen";
import initalmodules from "../../Data/modules";
import ModuleList from "../entity/modules/ModuleList";
import RederCount from "../UI/RenderCount";

export const ModuleListScreen = () => {
  //Instalisation
  //state
  const [modules, setmodles] = useState(initalmodules);

  //handlers
  const handleDelete = (module) =>
    setmodles(modules.filter((item) => item.ModuleID !== module.ModuleID));
  //view
  return (
    <Screen>
      <RederCount />
      <ModuleList modules={modules} onSelect={handleDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
