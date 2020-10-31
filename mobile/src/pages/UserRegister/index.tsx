import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
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

import DatePicker from "react-native-datepicker";

const UserRegister: React.FC = () => {
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
        <TextNewDocument>Registo</TextNewDocument>
        <Form>
          <TextInput
            placeholder="Nome"
            placeholderTextColor="#FFFF"
            style={styles.inputText}
          />

          <TextInput
            placeholder="Email"
            placeholderTextColor="#FFFF"
            style={styles.inputText}
          />

          <InputContainer>
            <TextInput
              placeholder="Pin"
              maxLength={4}
              placeholderTextColor="#FFFF"
              style={styles.inputTextEmicao}
            />

            <TextInput
              placeholder="País"
              placeholderTextColor="#FFFF"
              style={styles.inputTextExpiracao}
            />
          </InputContainer>
          {/* <DatePicker
            style={styles.inputTextExpiracao}
            date=""
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
                borderStyle: none,
              },
              // ... You can check the source to find the other keys.
            }}
          /> */}
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
