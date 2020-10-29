import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View``;

export const MenuOption = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background-color: #dbdbdb;
  width: 160px;
  height: 170px;
  border-radius: 20px;
`;

export const MenuOptionContaierOne = styled.View`
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const MenuOptionContaierTwo = styled.View`
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Footer = styled.View`
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
