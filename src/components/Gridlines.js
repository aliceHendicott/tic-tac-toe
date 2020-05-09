import React from "react";
import styled from "styled-components";

const GridSvg = styled.svg`
  position: absolute;
  width: 390px;
  height: 390px;
  margin: 50px;
`;

const GridLine = styled.line`
  stroke: #393e41;
  stroke-width: 8px;
  stroke-linecap: round;
`;

const GridLines = () => (
  <GridSvg>
    <GridLine x1="130" x2="130" y1="4" y2="386" />
    <GridLine x1="260" x2="260" y1="4" y2="386" />
    <GridLine x1="4" x2="386" y1="130" y2="130" />
    <GridLine x1="4" x2="386" y1="260" y2="260" />
  </GridSvg>
);

export default GridLines;
