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
color:white;
border-right: 1px solid white;
padding:3vh
`;
export const ReadersGrowingContainerRight = styled.div`
color:white;
padding:3vh;
font-size: 50px;
`;

export const ReadersGrowingContainerBottom = styled.div`
color:white;
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
color:white;
font-size: 18px;

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
export const GreenAreaContainer = styled.div`
background-color: #34a245;
`;
export const GreenArea = styled.div`
font-size: 136px;
display: flex;
justify-content: center;
`;
export const GreenAreaText = styled.div`
font-size: 16px;
display: flex;
justify-content: center;
`;
export const GreenAreaTextButton = styled.button`
display: flex;
flex-direction: column;
align-items: center;
justify-content: end;
width: 30vh;
color: white;
background-color:  #34a245;
border-color: white;
border-radius: 2vh;
font-size: 22px;
margin: 5vh;
`;
export const GreenAreaGrid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
grid-column-gap: 20px;
border-bottom: 1px solid black;
border-top: 1px solid black;

`;
export const GreenGridLeft = styled.div`
display: flex;
flex-direction: column;
align-items: baseline;
padding: 3vh;
border-right: 1px solid black;
`;
export const GreenGridLeftContent = styled.div`
font-size: 60px;
padding-bottom: 3vh;
`;
export const GreenGridLeftBottom = styled.div`
font-size: 18px;
font-family: sans-serif;
margin: 0 0 20px;
margin-top: 3vh;
`;
export const GreenGridRight = styled.div`
display: flex;
flex-direction: column;
align-items: baseline;
padding: 3vh;
`;
export const GreenGridRightContent = styled.div`
font-size: 60px;
padding-bottom: 3vh;
`;
export const GreenGridRighttBottom = styled.div`
font-size: 18px;
font-family: sans-serif;
margin: 0 0 20px;
margin-top: 3vh;
`;
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
margin: 1vh 0 ;
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
export const JoinUs = styled.div`
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

export const YourWorld = styled.div`
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