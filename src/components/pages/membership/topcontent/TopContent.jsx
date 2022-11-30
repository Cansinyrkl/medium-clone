import React from "react";
import {
  Header,
  Container,
  Content,
  Button,
  Image,
  Left,
  Grid,
  GridRight,
  LeftBottom,
  LeftContent,
  GridRightContent,
  GridRightBottom,
} from "./TopContent";

const TopContent = () => {
  return (
    <>
      <Container>
        <Header>Fuel great thinking.</Header>
        <Content>Become a Medium member to enjoy unlimited access and</Content>
        <Content> directly support the writers you read most.</Content>
        <Button>Get unlimited access</Button>
        <Grid>
          <Left>
            <LeftContent>Read as much as you want.</LeftContent>
            <Image
              src="https://media.tenor.com/6YsumrIde9QAAAAd/efe-aydal-gif.gif"
              alt="#"
            />
            <LeftBottom>
              Enjoy unlimited access to every story across all of your devices.
            </LeftBottom>
          </Left>
          <GridRight>
            <GridRightContent>Reward quality content.</GridRightContent>
            <Image
              src="https://media.tenor.com/6YsumrIde9QAAAAd/efe-aydal-gif.gif"
              alt="#"
            />
            <GridRightBottom>
              Your membership helps us pay writers, and keeps your experience
              ad-free.
            </GridRightBottom>
          </GridRight>
        </Grid>
      </Container>
    </>
  );
};

export default TopContent;
