import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import {
  useFonts,
  RalewayDots_400Regular,
} from "@expo-google-fonts/raleway-dots";
import Routes from "./src/routes";

export default function App() {
  const [fontsLOaded] = useFonts({
    RalewayDots_400Regular,
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
    padding: 24,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
