import styled from "styled-components";

export const TakeMediumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-column-gap: 20px;
  border-bottom: 1px solid black;
  background-color: #b6e5a4;
  padding: 3vh;
`;
export const TakeMediumContainerText = styled.div`
  margin: 1vh 0;
`;
export const TakeMediumContainerLeft = styled.div`
  font-size: 102px;
`;
export const TakeMediumContainerLeftImg = styled.img`
  width: 16vh;
  margin-top: 50px;
`;
export const TakeMediumContainerRight = styled.img`
  width: 30vh;
  padding-left: 30vh;
  padding-top: 8vh;
`;
