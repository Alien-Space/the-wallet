import React from "react";
import logoImage from "../../assets/logotipo/theWallet.png";

import { Container, Image, TextHeader } from "./styles";

interface PropsHeader {
  title: string;
}

function Header({ title }: PropsHeader) {
  return (
    <Container>
      <Image source={logoImage} />
      <TextHeader>{title}</TextHeader>
    </Container>
  );
}

export default Header;
