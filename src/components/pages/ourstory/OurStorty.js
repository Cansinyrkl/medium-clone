import styled from "styled-components";

export const Header = styled.div`
  margin-top: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  font-size: 6.5vw;
  border-bottom: 1px solid black;
  font-family: Georgia, "Times New Roman", Times, serif;
`;
export const Logo = styled.div`
  overflow: visible;
  padding-left: 0.3vw;
  font-size: 120px;
`;
export const OutStoryExplanationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  border-bottom: 1px solid black;
`;
export const OutStoryExplanation = styled.div`
  padding: 4vw;
  border-right: 1px solid black;
`;
export const Br = styled.div`
  height: 20px;
`;
export const OutStoryWorld = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  width: 500px;
`;
export const OutStoryNetworkContainer = styled.div`
  padding: 2vh;
  background-color: #ffd1b9;
`;
export const OutStoryNetwork = styled.div`
  font-size: 124px;
  font-family: Georgia, "Times New Roman", Times, serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OutStorContent = styled.div`
  font-size: 18px;
  font-family: Georgia, "Times New Roman", Times, serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OutStoryUsers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-column-gap: 20px;
  margin-top:5vh;
`;
export const OutStoryUsersDiv = styled.div`
  list-style-type: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-top: 1px solid red;
  height: 8vh;
`;

export const OutStoryUsersLogo = styled.img`
  width: 6vh;
  height: 6vh;
  border-radius: 100%;
`;
export const OutStoryUsersTitle = styled.div`
margin-left: 18px
`;

export const ReadersGrowingContainer = styled.div`
background-color: black;
color:white;
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
color:white;
border-right: 1px solid white;
padding:3vh

`;
export const ReadersGrowingContainerRight = styled.div`
color:white;
padding:3vh;
`;
export const ReadersGrowingContainerLogoContainer = styled.div`
display:flex;
align-items: center;
`;
export const ReadersGrowingContainerText = styled.div`
display: block;
font-size:22px;
font-weight: 600;
font-family: sans-serif;
margin-top: 5vh;
`;
