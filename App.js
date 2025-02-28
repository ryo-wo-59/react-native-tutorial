import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}></View>
        <View style={styles.rightContainer}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "green",
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
    backgroundColor: "green",
  },
  rightContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
});
