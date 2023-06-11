import React from "react";
import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

const InputContainer = styled.label`
  background-color: ${({ theme }) => theme.backgroundColor};
  color:${({ theme }) => theme.color}
  
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow:${({ theme }) => theme.shadow};
  width: 100%;  
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
    background-color: ${({ theme }) => theme.backgroundColor};
    color:${({ theme }) => theme.color}
  }
`;
const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country ...",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};

export default Search;
