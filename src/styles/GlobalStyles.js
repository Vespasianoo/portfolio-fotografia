import { createGlobalStyle } from "styled-components"
import theme from "./theme"
export default createGlobalStyle`
* {
   padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  background: none;
  border: none;
  text-decoration: none;
}
body *,
button,
input {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Montserrat', sans-serif;
}

html, body, #root {
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  background: ${theme.colors.color4};
  color: ${theme.colors.color1};
}
`
