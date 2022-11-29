import styled from "styled-components";

export const JoinUsC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-column-gap: 20px;
  border-bottom: 1px solid black;
  background-color: white;
`;
export const JoinUsLeft = styled.div`
  font-size: 13vh;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 3vh;
  border-right: 1px solid black;
`;
export const JoinUsRight = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  margin: 0;
  padding: 0;
`;
export const JoinUsRightGrid = styled.div`
  border-bottom: 1px solid black;
`;
export const JoinUsRightGridHeader = styled.div`
  font-size: 70px;
  margin: 1vh;
`;
export const JoinUsRightGridText = styled.div`
  font-size: 16px;
`;
export const JoinUsRightGridButton = styled.button`
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
