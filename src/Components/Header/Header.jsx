import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Container } from "../Container/Container";
import Wrapper from "./Wrapper";
import { IoMoon } from "react-icons/io5";
import ModeSwitcher from "./ModeSwitcher";

const Title = styled.a.attrs({ href: "/" })`
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  background-color: ${({ theme }) => theme.main};
`;

const HeaderEl = styled.header`
  background-color: ${({ theme }) => theme.backgroundColor}
  box-shadow: ${({theme})=>theme.main};
`;

const Header = ({ toggleMode }) => {
  const theme = useContext(ThemeContext);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher theme={theme} toggleMode={toggleMode}>
            <IoMoon />
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
