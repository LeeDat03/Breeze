import styled from "styled-components";

const Text = styled.span`
  color: var(--tx-color--dark);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
`;

function TextSpan({ children }) {
  return <Text>{children}</Text>;
}

export default TextSpan;
