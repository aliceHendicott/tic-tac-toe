import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  padding: 15px 25px;
  background-color: rgb(141, 43, 88);
  color: white;
  text-decoration: none;
  border-radius: 0.1875rem;
`;

const Button = ({ children, ...props }) => (
  <ButtonContainer {...props}>{children}</ButtonContainer>
);

export default Button;
