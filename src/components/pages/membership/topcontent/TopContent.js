import styled from "styled-components";

export const Image = styled.img`
  width: 500px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14vh;
  padding-bottom: 2vh;
  background-color: #4479ff;
  margin: 0;
`;
export const Header = styled.div`
  font-size: 15vh;
  color: white;
`;
export const Content = styled.div`
  font-size: 2vh;
  color: white;
`;
export const Button = styled.button`
  font-size: 22px;
  color: black;
  background-color: white;
  border-radius: 20px;
  border: none;
  width: 28vh;
  height: 4vh;
  margin: 5vh;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-column-gap: 20px;
  border-top: 1px solid white;
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 3vh;
  border-right: 1px solid white;
`;
export const LeftContent = styled.div`
  font-size: 60px;
  padding-bottom: 3vh;
`;
export const LeftBottom = styled.div`
  font-size: 18px;
  font-family: sans-serif;
  margin: 0 0 20px;
  margin-top: 3vh;
`;
export const GridRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 3vh;
`;
export const GridRightContent = styled.div`
  font-size: 60px;
  padding-bottom: 3vh;
`;
export const GridRightBottom = styled.div`
  font-size: 18px;
  font-family: sans-serif;
  margin: 0 0 20px;
  margin-top: 3vh;
`;
