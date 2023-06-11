import React, {useEffect} from "react";
import {useState} from "react";
import Search from "./Search";
import {CustomSelect} from "./CustomSelect";
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${({theme}) => theme.color}
  background-color: ${({theme}) => theme.backgroundColor};
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Controls = ({ onSearch, regions }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(search, regionValue);
  }, [search, region]);
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={regions}
        placeholder="Filtered by region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};

export default Controls;
