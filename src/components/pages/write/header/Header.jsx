import React from "react";
import { Container, MiniH, MainHeader, Text, Button } from "./Header";

const Header = () => {
  return (
    <>
      <Container>
        <MiniH>START A BLOG FOR FREE</MiniH>
        <MainHeader>
          Publish, grow, and <br />
          earn, all in one
          <br />
          place.
        </MainHeader>
        <Text>
          If you have a story to tell, knowledge to share, or a perspective to
          offer — <br />
          welcome home. Sign up for free so your writing can thrive in a network
          <br /> supported by millions of readers — not ads.
        </Text>
        <Button>Start writing</Button>
      </Container>
    </>
  );
};

export default Header;
