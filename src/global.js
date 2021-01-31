import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.Gray1};
    display: flex;
    font-family: 'Montserrat', sans-serif;
    /* height: 100vh; */
    padding: 32px 11px;
    justify-content: center;
    text-rendering: optimizeLegibility;
    max-width: 1440px;

    @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
      width: 1440px;
      padding: 52px 236px 17px;
    }
  }

  h1 {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;

    color: ${({ theme }) => theme.primaryDark};
    margin: 0 0 12px;

    @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 48px;
      line-height: 64px;
      /* identical to box height */
    }
  }

  h2 {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height */


    /* Gray 1 */

    color:${({ theme }) => theme.Gray1};
  }

  h3 {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height */

    /* Gray 1 */

    color: ${({ theme }) => theme.Gray1};
  }

  h4 {
    font-family: Playfair Display;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;

    /* Gray 1 */

    color: ${({ theme }) => theme.Gray1};

    @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
      line-height: 24px;
      /* identical to box height */
    }
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    /* or 24px */

    color: ${({ theme }) => theme.Gray1};
    margin-top: 0;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
