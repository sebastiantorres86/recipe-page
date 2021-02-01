import styled from "styled-components";

export const Link = styled.p`
  font-family: Montserrat;
  font-style: italic;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  /* or 18px */

  /* Gray 4 */

  color: ${({ theme }) => theme.Gray4};

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */
  }
`;
