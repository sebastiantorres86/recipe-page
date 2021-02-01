import styled from "styled-components";

export const Wrapper = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    /* align-items: baseline; */
  }
`;

export const Div1 = styled.div`
  margin-top: 0;
  order: 0;
  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    order: 1;
  }
`;

export const Div2 = styled.div`
    order: 1;
  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    order: 0;
    width: 62%;
  }
`;
