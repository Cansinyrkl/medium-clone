import React, { useState, useEffect } from "react";

import {
  Header,
  Logo,
  OutStoryExplanation,
  OutStoryExplanationContainer,
  OutStoryWorld,
  Br,
  Image,
  OutStoryNetwork,
  OutStoryNetworkContainer,
  OutStorContent,
  OutStoryUsers,
  OutStoryUsersDiv,
  OutStoryUsersLogo,
  OutStoryUsersTitle,
  ReadersGrowingContainer,
  ReadersGrowingContainerLeft,
  ReadersGrowingContainerRight,
  ReadersGrowingContainerBottom,
  ReadersGrowingAltContainer,
  BottomThinking,
  GreenArea,
  GreenAreaText,
  GreenAreaContainer,
  ReadersGrowingButton,
  BottomThinkingContainer,
  GreenAreaTextButton,
  GreenAreaGrid,
  GreenGridLeft,
  GreenGridLeftContent,
  GreenGridLeftBottom,
  GreenGridRightContent,
  GreenGridRight,
  GreenGridRighttBottom,
  TakeMediumContainer,
  TakeMediumContainerLeft,
  TakeMediumContainerRight,
  TakeMediumContainerLeftImg,
  TakeMediumContainerText,
  JoinUs,
  JoinUsLeft,
  JoinUsRight,
  JoinUsRightGrid,
  JoinUsRightGridHeader,
  JoinUsRightGridText,
  JoinUsRightGridButton,
  YourWorld,
  YourRight,
  YourRightButton,
  MediumLogo,
} from "./OurStorty.js";




const OutStory = () => {
  const [userPhoto, setUserPhoto] = useState([]);
  useEffect(() => {
    PhotoData();

  }, []);
  const PhotoData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setUserPhoto(data))
      .catch((err) => {
        console.log(err);
      });
  };
  const DividedPhoto = userPhoto.slice(4988);
  return (
    <>
      <Header>
        Every idea needs a<Logo>Medium.</Logo>
      </Header>
      <OutStoryExplanationContainer>
        <OutStoryExplanation>
          The best ideas can change who we are. Medium is where those ideas take
          shape, take off, and spark powerful conversations. We’re an open
          platform where over 100 million readers come to find insightful and
          dynamic thinking. Here, expert and undiscovered voices alike dive into
          the heart of any topic and bring new ideas to the surface. Our purpose
          is to spread these ideas and deepen understanding of the world.
          <Br />
          We’re creating a new model for digital publishing. One that supports
          nuance, complexity, and vital storytelling without giving in to the
          incentives of advertising. It’s an environment that’s open to everyone
          but promotes substance and authenticity. And it’s where deeper
          connections forged between readers and writers can lead to discovery
          and growth. Together with millions of collaborators, we’re building a
          trusted and vibrant ecosystem fueled by important ideas and the people
          who think about them.
        </OutStoryExplanation>
        <OutStoryWorld>
          <Image
            src="https://media.tenor.com/6YsumrIde9QAAAAd/efe-aydal-gif.gif"
            alt="#"
          />
        </OutStoryWorld>
      </OutStoryExplanationContainer>
      <OutStoryNetworkContainer>
        <OutStoryNetwork>A living network of</OutStoryNetwork>
        <OutStoryNetwork>curious minds.</OutStoryNetwork>
        <OutStorContent>
          Anyone can write on Medium. Thought-leaders, journalists, experts, and
        </OutStorContent>
        <OutStorContent>
          individuals with unique perspectives share their thinking here. You’ll
          find
        </OutStorContent>
        <OutStorContent>
          pieces by independent writers from around the globe, stories we
          feature and leading authors, and
        </OutStorContent>
        <OutStorContent>
          smart takes on our own suite of blogs and publications.
        </OutStorContent>
        <OutStoryUsers>
          {DividedPhoto.map(({ thumbnailUrl, title }) => {
            return (
              <OutStoryUsersDiv>
                <OutStoryUsersLogo src={thumbnailUrl} />
                <OutStoryUsersTitle>{title}</OutStoryUsersTitle>
              </OutStoryUsersDiv>
            );
          })}

        </OutStoryUsers>
      </OutStoryNetworkContainer>
      <ReadersGrowingContainer>
        <ReadersGrowingAltContainer>
          <ReadersGrowingContainerLeft>Over 100<br /> million<br /> readers and growing.</ReadersGrowingContainerLeft>
          <ReadersGrowingContainerRight>
            Burası Boş Carosel gelicek unutma
          </ReadersGrowingContainerRight>
        </ReadersGrowingAltContainer>
        <ReadersGrowingContainerBottom>
          Create the space for your <br />
        </ReadersGrowingContainerBottom>
        <ReadersGrowingContainerBottom>
          thinking to take off.
        </ReadersGrowingContainerBottom>
        <BottomThinkingContainer>
          <BottomThinking>
            A blank page is also a door. At Medium you can walk through it. It's easy
          </BottomThinking>
          <BottomThinking>
            and free to share your thinking on any topic, connect with an audience,
          </BottomThinking>
          <BottomThinking>
            express yourself with a range of publishing tools, and even earn money for
          </BottomThinking>
          <BottomThinking>
            your work.
          </BottomThinking>
          <ReadersGrowingButton>Write on Medium</ReadersGrowingButton>
        </BottomThinkingContainer>
      </ReadersGrowingContainer>
      <GreenAreaContainer>
        <GreenArea>
          Get more with
        </GreenArea>
        <GreenArea>
          membership.
        </GreenArea>
        <BottomThinkingContainer>
          <GreenAreaText>
            Become a Medium member to enjoy unlimited access and directly support
          </GreenAreaText>
          <GreenAreaText>
            the writers you read most.
          </GreenAreaText>
          <GreenAreaTextButton>See membership options</GreenAreaTextButton>
        </BottomThinkingContainer>
        <GreenAreaGrid>
          <GreenGridLeft>
            <GreenGridLeftContent>
              Read as much as you want.
            </GreenGridLeftContent>
            <Image
              src="https://media.tenor.com/6YsumrIde9QAAAAd/efe-aydal-gif.gif"
              alt="#"
            />
            <GreenGridLeftBottom>Enjoy unlimited access to every story across all of your devices.</GreenGridLeftBottom>
          </GreenGridLeft>
          <GreenGridRight>
            <GreenGridRightContent>Reward quality content.</GreenGridRightContent>
            <Image
              src="https://media.tenor.com/6YsumrIde9QAAAAd/efe-aydal-gif.gif"
              alt="#"
            />
            <GreenGridRighttBottom>Your membership helps us pay writers, and keeps your experience ad-free.</GreenGridRighttBottom>
          </GreenGridRight>
        </GreenAreaGrid>
      </GreenAreaContainer>
      <TakeMediumContainer>
        <div>
          <TakeMediumContainerLeft>Take Medium </TakeMediumContainerLeft>
          <TakeMediumContainerLeft>with you.</TakeMediumContainerLeft>
          <TakeMediumContainerText>Download our app so you can read wherever you are.</TakeMediumContainerText>
          <TakeMediumContainerLeftImg src={"/image/Apple.jpg"} />
          <TakeMediumContainerLeftImg src={"/image/Play.jpg"} />
        </div>
        <TakeMediumContainerRight src={"/image/Gridright.jpg"} />
      </TakeMediumContainer>
      <JoinUs>
        <JoinUsLeft>Learn more<br /> about us. Or<br /> join us.</JoinUsLeft>
        <JoinUsRight>
          <JoinUsRightGrid>
            <JoinUsRightGridHeader>The Medium blog</JoinUsRightGridHeader>
            <JoinUsRightGridText>Visit our company blog for the latest news, <br /> product updates, and tips and tricks.</JoinUsRightGridText>
            <JoinUsRightGridButton>Read our blog</JoinUsRightGridButton>
          </JoinUsRightGrid>
          <JoinUsRightGrid>
            <JoinUsRightGridHeader>Work at Medium</JoinUsRightGridHeader>
            <JoinUsRightGridText>Our team is home to engineers, journalists, artists, <br />and creatives of all stripes.</JoinUsRightGridText>
            <JoinUsRightGridButton>View open positions</JoinUsRightGridButton>
          </JoinUsRightGrid>
        </JoinUsRight>
      </JoinUs>
      <YourWorld>
      <Image
              src="https://media.tenor.com/pRqzQzIJ0ZQAAAAd/efe-aydal-hans-bilal.gif"
              alt="#"
            />
        <YourRight>
          Read, write, <br/> and expand <br/> your world.
          <YourRightButton>Get started</YourRightButton>
        </YourRight>
      </YourWorld>
      <MediumLogo>Medium</MediumLogo>
    </>
  );
};

export default OutStory;


