import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import Header from "../../components/Header";
import imgQR from "../../assets/Icones/icon/icon/qrcode.png";

import {
  Container,
  ContainerHeader,
  ImageQR,
  PinInputs,
  InputPin,
  InputPinContainer,
  RectButtonContainer,
} from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Logon: React.FC = () => {
  const navigation = useNavigation();
  const [focusedInputTwo, setFocusedInputTwo] = useState(false);

  function handleGoToRegister() {
    navigation.navigate("UserRegister");
  }
  function onInputChangeFocusInOtherInput() {
    setFocusedInputTwo(true);
  }

  return (
    <Container>
      <ContainerHeader>
        <Header />
        <ImageQR source={imgQR} />
      </ContainerHeader>
      <Text style={styles.textDocument}>
        Seus documentos {"\n"}mais próximos de si.
      </Text>
      <InputPinContainer>
        <PinInputs>
          <InputPin
            autoFocus={true}
            maxLength={1}
            onChangeText={onInputChangeFocusInOtherInput}
          />
          <InputPin maxLength={1} autoFocus={focusedInputTwo} />
          <InputPin maxLength={1} />
          <InputPin maxLength={1} />
        </PinInputs>
      </InputPinContainer>

      <RectButtonContainer>
        <RectButton onPress={handleGoToRegister} style={styles.CreateAccount}>
          <Text style={styles.textRegister}>Registar-se</Text>
        </RectButton>
      </RectButtonContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  textDocument: {
    marginTop: 10,
    fontSize: 40,
    fontFamily: "RalewayDots_400Regular",
    color: "#FFFF",
  },
  CreateAccount: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#FDB32A",
    padding: 15,
    width: 300,
    borderRadius: 20,
  },
  textRegister: {
    fontSize: 20,
    fontFamily: "Questrial_400Regular",
    fontWeight: "500",
    color: "#FFFF",
  },
});

export default Logon;
