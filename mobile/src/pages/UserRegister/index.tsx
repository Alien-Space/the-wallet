import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import {
  RectButton,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";
import logoImage from "../../assets/logotipo/logoRegister.png";
import backImage from "../../assets/Icones/goBack.png";
import checkImage from "../../assets/Icones/icon/check.png";
import {
  Container,
  Header,
  Image,
  ImageBack,
  TextNewDocument,
  Form,
  InputContainer,
  ImageCheck,
  ButtonSubmitContainer,
} from "./styles";

import api from "../../services/api";
import Toast from "react-native-fast-toast";

const UserRegister: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const toast = useRef<Toast>(null);

  function handleNavigateToBack() {
    navigation.goBack();
  }

  async function handleCreateUser() {
    const data = await api
      .post("users", {
        name,
        email,
        pin,
      })
      .then(() => {
        toast?.current?.show("Cadastro efectuado com sucesso", {
          type: "success",
        });
      });

    console.log(data);
  }

  return (
    <Container>
      <ScrollView>
        <Toast ref={toast} />
        <Header>
          <RectButton onPress={handleNavigateToBack}>
            <ImageBack source={backImage} />
          </RectButton>
          <Image source={logoImage} />
        </Header>
        <TextNewDocument>Registo</TextNewDocument>
        <Form>
          <TextInput
            placeholder="Nome"
            placeholderTextColor="#FFFF"
            onChangeText={(text) => setName(text)}
            style={styles.inputText}
          />

          <TextInput
            placeholder="Email"
            placeholderTextColor="#FFFF"
            onChangeText={(text) => setEmail(text)}
            style={styles.inputText}
          />

          <InputContainer>
            <TextInput
              placeholder="Pin"
              maxLength={4}
              placeholderTextColor="#FFFF"
              onChangeText={(text) => setPin(text)}
              style={styles.inputTextEmicao}
            />

            <TextInput
              placeholder="País"
              placeholderTextColor="#FFFF"
              style={styles.inputTextExpiracao}
            />
          </InputContainer>

          <ButtonSubmitContainer>
            <RectButton style={styles.submitButton} onPress={handleCreateUser}>
              <ImageCheck source={checkImage} />
            </RectButton>
          </ButtonSubmitContainer>
        </Form>
      </ScrollView>
    </Container>
  );
};

export default UserRegister;
const styles = StyleSheet.create({
  inputText: {
    width: 295,
    height: 42,
    backgroundColor: "#0D1F3C",
    opacity: 0.8,
    borderRadius: 6,
    marginTop: 20,
    color: "#FFF",
    padding: 14,
  },
  labelText: {
    marginTop: 10,
    color: "#0D1F3C",
    fontSize: 16,
  },
  inputTextEmicao: {
    width: 140,
    height: 42,
    backgroundColor: "#0D1F3C",
    opacity: 0.8,
    borderRadius: 6,
    color: "#FFF",
    padding: 14,
  },
  inputTextExpiracao: {
    width: 140,
    height: 42,
    backgroundColor: "#0D1F3C",
    opacity: 0.8,
    borderRadius: 6,
    color: "#FFF",
    padding: 14,
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: "#FDB32A",
    padding: 20,
    borderRadius: 20,
  },
});
