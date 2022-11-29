import styled from "styled-components";

export const ReadersGrowingContainer = styled.div`
  background-color: black;
  color: white;
`;
export const ReadersGrowingAltContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-column-gap: 20px;
  border-bottom: 1px solid white;
`;
export const ReadersGrowingContainerLeft = styled.div`
  font-size: 130px;
  color: white;
  border-right: 1px solid white;
  padding: 3vh;
`;
export const ReadersGrowingContainerRight = styled.div`
  color: white;
  padding: 3vh;
  font-size: 50px;
`;
export const ReadersGrowingContainerBottom = styled.div`
  color: white;
  font-size: 130px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BottomThinkingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vh;
`;
export const BottomThinking = styled.div`
  color: white;
  font-size: 18px;
`;
export const ReadersGrowingContainerLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ReadersGrowingContainerText = styled.div`
  display: block;
  font-size: 22px;
  font-weight: 600;
  font-family: sans-serif;
  margin-top: 5vh;
`;
export const ReadersGrowingButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 22vh;
  color: green;
  background-color: black;
  border-color: green;
  border-radius: 2vh;
  font-size: 22px;
  margin: 5vh;
`;
