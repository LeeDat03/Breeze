import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StartingLayout = styled.div`
  width: 85vw;
  height: 90vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
`;

const StartingLogo = styled.div`
  background-color: var(--bg-gray--1);
  box-shadow: var(--shadow-md);
  border-radius: 1.4rem;
  width: 90%;

  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 25rem;
    height: 25rem;
  }
`;

const StartingHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;

  & img {
    width: 5rem;
    height: 5rem;
  }

  & h1 {
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 1.8;
    letter-spacing: 0.4rem;
  }

  & p {
    color: var(--tx-color--gray);
    font-size: 2rem;
    font-weight: 600;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function StartingPage() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/weather");
  }

  return (
    <Container>
      <StartingLayout>
        <StartingLogo>
          <img src="../../public/logo/logo.png" alt="Logo" />
        </StartingLogo>

        <StartingHead>
          <img src="../../public/logo/logo.png" alt="Logo" />
          <div>
            <h1>Breeze</h1>
            <p>Weather App</p>
          </div>

          <Button $variation="animate" onClick={handleNavigate}>
            Get started
          </Button>
        </StartingHead>
      </StartingLayout>
    </Container>
  );
}

export default StartingPage;
