import { NavLink } from "react-router-dom";
import { FaCloudSunRain, FaList, FaMap } from "react-icons/fa6";

import styled from "styled-components";
import Timer from "./Timer";

const NavBarStyled = styled.aside`
  background-color: var(--bg-gray--2);
  grid-column: 1/2;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-radius: 3rem;
  box-shadow: var(--shadow-md);
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  color: var(--tx-color--gray);
  font-size: 1.6rem;
  margin-top: 3rem;
`;

const LogoImg = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  & img {
    width: 3rem;
    height: 3rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1.2rem;
    transition: all 0.3s;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: currentColor;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--tx-color);
    font-weight: 700;
  }
`;

function NavBar() {
  return (
    <NavBarStyled>
      <StyledNavLink to="/">
        <LogoImg>
          <img src="/logo/logo.png" alt="Logo" />
        </LogoImg>
      </StyledNavLink>
      <UL>
        <li>
          <StyledNavLink to="/weather">
            <FaCloudSunRain />
            <span>Weather</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cities">
            <FaList />
            <span>Cities</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/map">
            <FaMap />
            <span>Map</span>
          </StyledNavLink>
        </li>
      </UL>
      <Timer />
    </NavBarStyled>
  );
}

export default NavBar;
