import React from "react";
import { StyleSheet, View } from "react-native";
import {
  useFonts,
  RalewayDots_400Regular,
} from "@expo-google-fonts/raleway-dots";
import { Questrial_400Regular } from "@expo-google-fonts/questrial";
import Routes from "./src/routes";

export default function App() {
  const [fontsLOaded] = useFonts({
    RalewayDots_400Regular,
    Questrial_400Regular,
  });
  if (!fontsLOaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Routes />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1F3C",
    paddingTop: 30,
    padding: 15,
  },
});
