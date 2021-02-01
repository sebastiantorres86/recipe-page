import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    padding: 57px 43px 7px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    max-width: 216px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 33%;
  height: 26px;
  margin-bottom: 25px;
  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    width: 100%;
    margin-bottom: 43px;
    height: 32.75px;
  }
`;

export const Row2 = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: column;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 17px;
  height: auto;
  margin-right: 5.52px;

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    width: 28px;
    height: auto;
    margin-right: 14px;
  }
`;

export const Info = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 10px;
  text-transform: uppercase;

  /* Gray 4 */

  color: ${({ theme }) => theme.Gray4};
  margin-bottom: 0;

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const Data = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;

  /* Gray 1 */

  color: ${({ theme }) => theme.Gray1};
  margin-bottom: 0;

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
  }
`;

export const DataOrange = styled(Data)`
  /* Orange */

  color: ${({ theme }) => theme.Orange};
`;
