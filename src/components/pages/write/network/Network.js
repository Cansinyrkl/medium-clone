import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: black;
  padding: 1vh;
`;
export const Left = styled.div`
  font-size: 10vh;
  font-family: sans-serif;
  padding: 2vh;
  color: white;
`;
export const Right = styled.div`
  font-size: 2vh;
  color: white;
  display: flex;
  flex-direction: column;
`;
export const Logo = styled.img`
  border-radius: 100%;
  width: 5vh;
  height: 5vh;
  margin-right: 1.5vh;
`;
export const Map = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5vh;
  padding: 1vh;
  border-top: 1px solid white;
`;
