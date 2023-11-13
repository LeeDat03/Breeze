import { createGlobalStyle } from "styled-components";
import "leaflet/dist/leaflet.css";

const GlobalStyles = createGlobalStyle`

:root {
  --color-brand: #3b82f6;
  --color-brand--1: #2563eb;

  --color-red: #ef4444;
  --color-red-dark: #dc2626;

  --bg-color: #fafafa;
  --bg-gray--1: #e2e8f0;
  --bg-gray--2: #EAECEF;

  --tx-color: #1f2937;
  --tx-color--gray: #9ca3af;
  --tx-color--light: #d1d5db;
  --tx-color--dark:#6b7280;
  

  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  
}

body {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: var(--tx-color);
  font-weight: 400;
  line-height: 1.6;

  background-color: var(--bg-color);

}

a{
  color: inherit;
  text-decoration: none;
  font-size: inherit;
}

ul{
  list-style: none;
}

img {
  max-width: 100%;
}

button{
  background: transparent;
  border: none;
  color: var(--tx-color);
  cursor: pointer;
  transition: all 0.3s;
}

input{
  font-size: inherit;
  color: var(--tx-color--gray);
  background-color: inherit;
  border: none;
}

*:disabled{
  cursor: not-allowed;
}

`;

export default GlobalStyles;
