import styled from "styled-components";

const Contain = styled.div`
  position: absolute;
  right: 50%;
  top: 40%;
  transform: translate(-50%, -50%);

  .ld-ripple {
    position: relative;
    width: 10rem;
    height: 10rem;
  }

  .ld-ripple div {
    position: absolute;
    border: 5px solid var(--color-brand);
    opacity: 1;
    border-radius: 50%;
    animation: ld-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .ld-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes ld-ripple {
    0% {
      /* top: 36px;
      left: 36px; */
      top: 10rem;
      left: 10rem;
      width: 0;
      height: 0;
      opacity: 0;
    }

    4.9% {
      /* top: 36px;
      left: 36px; */
      top: 10rem;
      left: 10rem;
      width: 0;
      height: 0;
      opacity: 0;
    }

    5% {
      /* top: 36px;
      left: 36px; */
      top: 10rem;
      left: 10rem;
      width: 0;
      height: 0;
      opacity: 1;
    }

    100% {
      top: 0px;
      left: 0px;
      width: 20rem;
      height: 20rem;
      opacity: 0;
    }
  }
`;

function Spinner() {
  return (
    <Contain>
      <div className="ld-ripple">
        <div></div>
        <div></div>
      </div>
    </Contain>
  );
}

export default Spinner;
