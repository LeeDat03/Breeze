import styled from "styled-components";

const Contain = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2.4rem;
  width: max-content;
  padding: 1.2rem 4.8rem !important;
  border-radius: 2rem;
  background-color: var(--color-red);
  color: #fff;
  transform: translate(-50%, -50%);
`;

function Message({ children }) {
  return (
    <Contain>
      <span>{children}</span>
    </Contain>
  );
}

export default Message;
