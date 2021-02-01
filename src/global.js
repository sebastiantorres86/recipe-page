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
    /* align-items: center; */
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.Gray1};
    /* display: flex; */
    font-family: 'Montserrat', sans-serif;
    /* height: 100vh; */
    padding: 32px 11px;
    /* justify-content: center; */
    /* text-rendering: optimizeLegibility; */
    max-width: 1440px;
    height: auto;

    @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
      width: 1440px;
      padding: 52px 236px 17px;
      background: #FFFFFF;
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
    margin-bottom: 13px;
    /* identical to box height */

    /* Gray 1 */

    color: ${({ theme }) => theme.Gray1};
    @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 24px;
      line-height: 32px;
      /* identical to box height */
      margin-top: 0;
      margin-bottom: 32px;
    }
  }

  h4 {
    font-family: Playfair Display;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 23px;

    /* Gray 1 */

    color: ${({ theme }) => theme.Gray1};

    @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 18px;
      line-height: 24px;
      /* identical to box height */
      margin-bottom: 30px;
    }
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 25px;
    /* identical to box height, or 179% */

    color: ${({ theme }) => theme.Gray1};
    margin-top: 0;
    margin-bottom: 3px;


    @media only screen and (min-width: ${({ theme }) => theme.desktop})  {
      font-size: 16px;
      line-height: 25px;
      /* or 156% */
      margin-bottom: 12px;
    }
  }

  img {
    width: 100%;
    height: auto;
  }

  [type="checkbox"] {
    border: 1px solid #828282;
    box-sizing: border-box;
    border-radius: 4px;
    min-width: 21px;
    min-height: 21px;
    margin-right: 8px;

    @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
      margin-right: 17px;
    }
  }

  form {
    margin-bottom: 42px;

    @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
      margin-bottom: 38px;
    }
  }
`;
