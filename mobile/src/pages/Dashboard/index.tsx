import React from "react";
import { StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import Header from "../../components/Header";

import {
  Container,
  MenuOption,
  MenuOptionContaierOne,
  MenuOptionContaierTwo,
  Footer,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToCreateDocument() {
    navigation.navigate("CreateDocument");
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="About" />
        <Text style={styles.textDocument}>Seus {"\n"}documento</Text>

        <MenuOptionContaierOne>
          <MenuOption style={{ backgroundColor: "#fdb32a" }}>
            <Feather name="plus" size={20} color="#FFF" />
          </MenuOption>
          <MenuOption>
            <Feather name="plus" size={20} color="#FFF" />
          </MenuOption>
        </MenuOptionContaierOne>

        <MenuOptionContaierTwo>
          <MenuOption>
            <Feather name="plus" size={20} color="#FFF" />
          </MenuOption>
          <MenuOption>
            <Feather name="plus" size={20} color="#FFF" />
          </MenuOption>
        </MenuOptionContaierTwo>

        <Footer>
          <Text style={styles.textDocument}>Adicione novo {"\n"}documento</Text>
          <MenuOption
            style={{ backgroundColor: "#fdb32a", width: 66, height: 66 }}
            onPress={handleNavigateToCreateDocument}>
            <Feather name="plus" size={20} color="#FFF" />
          </MenuOption>
        </Footer>
      </ScrollView>
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
