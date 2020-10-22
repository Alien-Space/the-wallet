import React from "react";
import { StyleSheet, Text } from "react-native";
import Header from "../../components/Header";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header title="About" />
      <Text style={styles.textDocument}>Seus {"\n"} documento</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  textDocument: {
    fontSize: 40,
    fontFamily: "RalewayDots_400Regular",
    color: "#FFFF",
  },
});

export default Dashboard;
