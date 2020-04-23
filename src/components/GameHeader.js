import React from "react";
import logo from "../assets/logo.png";

import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #393e41;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const LogoContainer = styled.div`
  width: 50px;
  height: 50px;
`;

const Logo = styled.img.attrs({ src: logo })`
  width: 100%;
`;

const GameName = styled.div`
  line-height: 50px;
  color: white;
  font-weight: bold;
  font-size: 2rem;
`;

const KeyText = styled.span`
  color: #d282a6;
`;

const GameAuthor = styled.div`
  line-height: 50px;
  color: white;
  font-style: italic;
  font-size: 1rem;
`;

const GameHeader = () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <GameName>
      <KeyText>Tic Tac Toe</KeyText>.
    </GameName>
    <GameAuthor>Games by Alice</GameAuthor>
  </HeaderContainer>
);

export default GameHeader;
