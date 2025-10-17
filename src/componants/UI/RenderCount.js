import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

const RederCount = ({
  backgroundColor = "dodgerblue",
  fontColor = "white",
}) => {
  //Instalisation
  //state
  const rendercount = useRef(0);
  rendercount.current += 1;
  //handlers
  //view
  return (
    <Text style={[StyleSheet.count, { backgroundColor, Color: fontColor }]}>
      Number of renders: {rendercount.current}
    </Text>
  );
};

const styles = StyleSheet.create({
  count: {
    padding: 5,
  },
});

export default RederCount;
