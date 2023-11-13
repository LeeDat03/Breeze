import styled, { css } from "styled-components";

const variations = {
  animate: css`
    background-color: var(--color-brand);
    color: var(--bg-color);
    transition: all 0.45s;

    &:hover {
      background-color: var(--color-brand--1);
    }

    &::after {
      content: "";
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: 100rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      background-color: #60a5fa;
      transition: all 0.4s;
    }

    &:hover {
      &::after {
        transform: scaleX(1.6) scaleY(1.6);
        opacity: 0;
      }
    }

    &:active {
      background-color: var(--color-brand--1);
    }
  `,

  primary: css`
    background-color: var(--color-brand);
    color: var(--bg-color);
    transition: all 0.45s;

    &:hover {
      background-color: var(--color-brand--1);
    }
  `,

  delete: css`
    background-color: var(--color-red);
    color: var(--bg-color);

    &:hover {
      background-color: var(--color-red-dark);
    }
  `,
};

const sizes = {
  large: css`
    padding: 1.5rem 2.5rem;
    font-size: 1.6rem;
    font-weight: 600;
  `,

  medium: css`
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  `,
};

const Button = styled.button`
  position: relative;
  box-shadow: var(--shadow-sm);
  border-radius: 100rem;

  ${(props) => variations[props.$variation]}
  ${(props) => sizes[props.$size]}
`;

Button.defaultProps = {
  $variation: "primary",
  $size: "large",
};

export default Button;
