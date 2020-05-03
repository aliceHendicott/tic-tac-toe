import React from "react";
import styled from "styled-components";

const ContentsContainer = styled.div`
  max-width: 1120px;
  margin: 0px auto;
  padding: 50px 10px;
  display: flex;
  justify-content: center;
`;

const Contents = ({ children, ...props }) => (
  <ContentsContainer {...props}>{children}</ContentsContainer>
);

export default Contents;
