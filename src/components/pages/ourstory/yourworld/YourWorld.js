import styled from "styled-components";

export const Image = styled.img`
  width: 500px;
`;
export const YourWorldC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-column-gap: 20px;
  border-bottom: 1px solid black;
`;
export const YourRight = styled.div`
  font-size: 100px;
`;
export const YourRightButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22vh;
  color: green;
  border-color: green;
  border-radius: 2vh;
  font-size: 22px;
  margin-top: 6vh;
`;
export const MediumLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6vh;
  font-weight: 600;
  padding: 2vh;
`;
