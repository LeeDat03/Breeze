import { Outlet } from "react-router";
import styled from "styled-components";
import SearchBar from "../ui/SearchBar";
import NavBar from "../ui/NavBar";

const LayoutStyled = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;

  display: grid;
  grid-template-columns: 10rem 3fr 1.5fr;
  grid-template-rows: 4rem 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;

const MainContent = styled.div`
  grid-column: 2/4;
  grid-row: 2/3;
  overflow: hidden;
`;

function AppLayout() {
  return (
    <LayoutStyled>
      <SearchBar />
      <NavBar />

      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutStyled>
  );
}

export default AppLayout;
