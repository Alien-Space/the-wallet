import React from "react";
import { RectButton, ScrollView } from "react-native-gesture-handler";
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
  ContainerOne,
  ContainerTwo,
  ImageCheck,
  ButtonSubmitContainer,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TextInput } from "react-native";

const CreateDocument: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <ScrollView>
        <Header>
          <RectButton onPress={handleNavigateToBack}>
            <ImageBack source={backImage} />
          </RectButton>
          <Image source={logoImage} />
        </Header>
        <TextNewDocument>Novo documento</TextNewDocument>
        <Form>
          <Text style={styles.labelText}>Nome</Text>
          <TextInput style={styles.inputText} />

          <Text style={styles.labelText}>Tipo</Text>
          <TextInput style={styles.inputText} />

          <InputContainer>
            <ContainerOne>
              <Text style={styles.labelText}>Emição</Text>
              <TextInput style={styles.inputTextEmicao} />
            </ContainerOne>

            <ContainerTwo>
              <Text style={styles.labelText}>Expiração</Text>
              <TextInput style={styles.inputTextExpiracao} />
            </ContainerTwo>
          </InputContainer>

          <Text style={styles.labelText}>Nome do cartão</Text>
          <TextInput style={styles.inputText} />

          <Text style={styles.labelText}>Número</Text>
          <TextInput style={styles.inputText} />

          <ButtonSubmitContainer>
            <RectButton style={styles.submitButton}>
              <ImageCheck source={checkImage} />
            </RectButton>
          </ButtonSubmitContainer>
        </Form>
      </ScrollView>
    </Container>
  );
};

export default CreateDocument;

const styles = StyleSheet.create({
  inputText: {
    width: 295,
    height: 42,
    backgroundColor: "#0D1F3C",
    opacity: 0.8,
    borderRadius: 6,
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
