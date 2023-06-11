import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  background-color: ${({theme})=>theme.main};
  border-radius: 4%;
`

export default Wrapper;