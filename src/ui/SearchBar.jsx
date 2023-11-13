import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import styled from "styled-components";

import { useWeather } from "../context/WeatherContextAPI";

const Form = styled.form`
  width: 100%;
  height: 100%;
  grid-column: 2/3;
`;

const SearchBarStyled = styled.input`
  background-color: var(--bg-gray--2);
  color: #6b7280;
  width: 100%;
  grid-column: 2/3;

  font-size: 1.6rem;
  padding: 1.2rem 2.4rem;
  border-radius: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s;

  &:focus {
    background-color: var(--bg-gray--1);
    transform: translateY(-3px);
    outline: none;
  }
`;

function SearchBar() {
  const location = useLocation().pathname;
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { getCityWeather, status } = useWeather();

  function handleSearch(e) {
    e.preventDefault();

    if (location === "/weather") navigate("cities");

    if (search.length > 2) {
      getCityWeather(search);
      setSearch("");
    }
  }

  return (
    <Form onSubmit={handleSearch}>
      <SearchBarStyled
        placeholder="Search for cities"
        value={search}
        disabled={status === "loading"}
        onChange={(e) => setSearch(e.target.value)}
      ></SearchBarStyled>
    </Form>
  );
}

export default SearchBar;
