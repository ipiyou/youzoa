import { css } from "@emotion/react";

const global = css`
  @import url("https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,400;1,100&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Exo;
  }
  html,
  body,
  #root {
    height: 100%;
  }
`;

export default global;
