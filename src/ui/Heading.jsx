import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h4" &&
    css`
      color: var(--tx-color--dark);
      font-size: 1.2rem;
      font-weight: 700;
      text-transform: uppercase;
    `}
`;

export default Heading;
