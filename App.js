import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "./src/componants/screens/ModuleListScreen";
import ModuleAddScreen from "./src/componants/screens/ModuleAddScreen";
import ModuleViewScreen from "./src/componants/screens/ModuleViewScreen";
import ModuleModifyScreen from "./src/componants/screens/ModuleModifyScreen";

const stack = createNativeStackNavigator();
export const App = () => {
  //Instalisation
  //state
  //handlers
  //view
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="ModuleAddScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "Black" },
          headerTintColor: "white",
        }}
      >
        <stack.Screen
          name="ModuleListScreen"
          component={ModuleListScreen}
          options={{ title: "List modules" }}
        />
        <stack.Screen
          name="ModuleAddScreen"
          component={ModuleAddScreen}
          options={{ title: "Add modules" }}
        />

        <stack.Screen
          name="ModuleViewScreen"
          component={ModuleViewScreen}
          options={{ title: "View modules" }}
        />
        <stack.Screen
          name="ModuleModifyScreen"
          component={ModuleModifyScreen}
          options={{ title: "Modify modules" }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
