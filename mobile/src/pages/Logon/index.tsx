import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
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
  const inputOne = useRef<TextInput | null>(null);
  const inputTwo = useRef<TextInput | null>(null);
  const inputThree = useRef<TextInput | null>(null);
  const inputInitial = useRef<TextInput | null>(null);
  const [valueLogon, setValueLogon] = useState("");

  function onInputOneChange() {
    inputOne?.current?.focus();
  }
  function onInputTwoChange() {
    inputTwo?.current?.focus();
  }
  function onInputThreeChange() {
    inputThree?.current?.focus();
  }
  function onInputInitialChange() {
    inputInitial?.current?.focus();
  }
  function handleGoToRegister() {
    navigation.navigate("UserRegister");
  }
  function handleGoToDashboard() {
    navigation.navigate("Dashboard");
  }

  function getTextOnInput(text: string) {
    setValueLogon(valueLogon + text);
    console.log(valueLogon);
  }

  return (
    <Container>
      <View>
        <ContainerHeader>
          <Header />
          <RectButton onPress={handleGoToDashboard}>
            <ImageQR source={imgQR} />
          </RectButton>
        </ContainerHeader>
        <Text style={styles.textDocument}>
          Seus documentos {"\n"}mais próximos de si.
        </Text>
        <InputPinContainer>
          <PinInputs>
            <InputPin
              ref={inputInitial}
              selectionColor={"#000000"}
              onChangeText={(text) => {
                if (!text) return;
                setValueLogon(text);
                onInputOneChange();
              }}
              maxLength={1}
            />
            <InputPin
              ref={inputOne}
              onChangeText={(text) => {
                if (!text) return;
                getTextOnInput(text);
                onInputTwoChange();
              }}
              onKeyPress={({ nativeEvent }) => {
                nativeEvent.key === "Backspace" ? onInputInitialChange() : null;
              }}
              maxLength={1}
            />
            <InputPin
              ref={inputTwo}
              maxLength={1}
              onChangeText={(text) => {
                if (!text) return;

                getTextOnInput(text);
                onInputThreeChange();
              }}
              onKeyPress={({ nativeEvent }) => {
                nativeEvent.key === "Backspace" ? onInputOneChange() : null;
              }}
            />
            <InputPin
              ref={inputThree}
              maxLength={1}
              onChangeText={(text) => {
                if (!text) return;
                getTextOnInput(text);
                console.log(valueLogon);
              }}
              onKeyPress={({ nativeEvent }) => {
                nativeEvent.key === "Backspace" ? onInputTwoChange() : null;
              }}
            />
          </PinInputs>
        </InputPinContainer>
        <RectButtonContainer>
          <RectButton onPress={handleGoToRegister} style={styles.CreateAccount}>
            <Text style={styles.textRegister}>Registar-se</Text>
          </RectButton>
        </RectButtonContainer>
      </View>
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
