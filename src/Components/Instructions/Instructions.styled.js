import styled from "styled-components";

export const Container = styled.div`
@media only screen and (min-width: ${({ theme }) => theme.desktop}) {
  margin-bottom: 45px;
}
`

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px;

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    width: 61%;
  }
`;

export const Number = styled.p`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height */

  color: #ffffff;
  background: ${({ theme }) => theme.Orange};
  border-radius: 6px;
  width: 36px;
  height: 36px;
  text-align: center;
  margin-right: 15px;
`;

export const Div = styled.div`
  flex: 1;
`;
