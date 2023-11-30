import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

  color: var(--color-primary-black);
}

body{
  font-family: 'Roboto', sans-serif;
   font-weight: 300;
}

:root {
  --color-primary-green: #80ed99;
  --color-primary-black: #060606;
  --color-secund-green: #2c5837;
  --color-secund-black: #272727;
  --color-primary-white: #d6d6d6;
  --color-secund-white: #8d8d8d;
}

button {
  cursor: pointer;
  border: none;
}

/* form{
  border: #060606 solid 2px;
} */


`

