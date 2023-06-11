import styled from "styled-components";
import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: `${({ theme }) => theme.backgroundColor}`,
      color: `${({ theme }) => theme.color}`,
      borderRadius: "0.5rem",
      padding: "0.2rem",
      border: "none",
      boxShadow: `${({ theme }) => theme.shadow}`,
      height: "40px",

    }),
    option: (provided) => ({
      ...provided,
      cursor: "pointer",
      color: `${({ theme }) => theme.color}`,
      background: `${({ theme }) => theme.backgroundColor}`,
    }),
  },
})`
  width: 200px;
  border-radius: 0.5rem;
  font-family: "Nunito Sans", sans-serif;
  border: none;

  & > * {
    box-shadow: ${({ theme }) => theme.shadow};
  }

  & > * {
    color: ${({ theme }) => theme.color};
  }
`;
