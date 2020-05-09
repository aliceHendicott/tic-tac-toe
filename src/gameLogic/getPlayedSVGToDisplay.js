import React from "react";
import styled from "styled-components";

const Line = styled.line`
  stroke: #d282a6;
  stroke-width: 8px;
  stroke-linecap: round;
`;

const Circle = styled.circle`
  stroke: #d282a6;
  stroke-width: 8px;
  fill: none;
`;

const EntrySvg = styled.svg`
  width: 80px;
  height: 80px;
  margin: 25px;
`;

const getPlayedSVGToDisplay = value => {
  if (value === 1) {
    return (
      <EntrySvg>
        <Line x1="4" x2="76" y1="4" y2="76" />
        <Line x1="76" x2="4" y1="4" y2="76" />
      </EntrySvg>
    );
  } else if (value === 2) {
    return (
      <EntrySvg>
        <Circle cx="40" cy="40" r="36" />
      </EntrySvg>
    );
  } else return "";
};

export default getPlayedSVGToDisplay;
