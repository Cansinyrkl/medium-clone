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
        <ReadersGrowingContainerLeft>Over 100<br /> million<br /> readers and growing.</ReadersGrowingContainerLeft>
        <ReadersGrowingContainerRight>

        </ReadersGrowingContainerRight>
      </ReadersGrowingContainer>
    </>
  );
};

export default OutStory;


