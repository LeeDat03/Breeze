import styled from "styled-components";
import MainContainer from "../ui/MainContainer";

import CitiesMain from "../features/cities/CitiesMain";
import { Outlet } from "react-router";

const Container = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

function Cities() {
  return (
    <MainContainer>
      <Container>
        <CitiesMain />
      </Container>

      <Outlet />
    </MainContainer>
  );
}

export default Cities;
