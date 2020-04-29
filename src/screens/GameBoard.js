import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  width: 390px;
  height: 390px;
  background-color: #808080;
`;

const GridBox = styled.div`
  display: inline-block;
  width: 130px;
  height: 130px;
`;

const GameBoard = () => {
  return (
    <GridContainer>
      <GridBox id="top-left"></GridBox>
      <GridBox id="top"></GridBox>
      <GridBox id="top-right"></GridBox>
      <GridBox id="middle-left"></GridBox>
      <GridBox id="middle"></GridBox>
      <GridBox id="middle-right"></GridBox>
      <GridBox id="bottom-left"></GridBox>
      <GridBox id="bottom"></GridBox>
      <GridBox id="bottom-right"></GridBox>
    </GridContainer>
  );
};

export default GameBoard;
