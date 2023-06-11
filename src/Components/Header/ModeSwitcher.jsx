import React, {useContext} from "react";
import styled, {ThemeContext} from "styled-components";

const SwitcherTheme = styled.button`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({theme}) => theme.color};
  background-color: ${({theme}) => theme.backgroundColor};
  box-shadow: ${({theme})=>theme.shadow};
  cursor: pointer;
padding: 0 1rem;
  border-radius: 100px;
  border: none;
  align-items: center;
  gap: 0.75rem;
`;

const ModeSwitcher = ({children, toggleMode}) => {
    const theme = useContext(ThemeContext);

    return (
        <>
            <SwitcherTheme onClick={toggleMode}>
                {children}
                <span style={{marginLeft:'0.7rem'}}>{theme.name} Mode</span>
            </SwitcherTheme>
        </>
    );
};

export default ModeSwitcher;
