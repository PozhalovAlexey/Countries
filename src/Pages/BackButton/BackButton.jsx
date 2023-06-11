import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  padding: 0 1rem;
  background-color: ${({theme}) => theme.backgroundColor};
  box-shadow: ${({theme})=>theme.boxShadow};
  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({theme})=>theme.color};
  cursor: pointer;
  
`

export const BackButton = ({onClick}) => {
    return (
        <Button onClick={onClick}>
            Back
        </Button>
    );
};

export default BackButton;