import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 24px;

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    margin-bottom: 48px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: baseline;

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    width: 63%;
  }
`;

export const ImageWrapper = styled.img`
  flex: 1;
  padding-right: 12px;
`;

export const Subheading = styled.p`
  font-family: Montserrat;
  font-style: italic;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  /* Gray 2 */

  color: ${({ theme }) => theme.Gray2};
  margin-bottom: 17px;

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    margin-bottom: 43px;
    font-size: 14px;
    line-height: 17px;
  }
`;
