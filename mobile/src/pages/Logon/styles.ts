import styled from "styled-components/native";

export const Container = styled.View``;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ImageQR = styled.Image`
  margin-top: 28px;
`;

export const PinInputs = styled.View`
  /* margin-top: 30%; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 299px;
  height: 92px;
  border-radius: 15px;
`;

export const InputPin = styled.TextInput`
  width: 55px;
  height: 63px;
  background: #fdb32a;
  margin: 5px;
  border-radius: 8px;
  text-align: center;
  font-size: 37px;
  font-family: Questrial_400Regular;
  align-items: center;
  justify-content: center;
`;

export const InputPinContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`;

export const RectButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`;
