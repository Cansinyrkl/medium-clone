import React from "react";
import {
  Image,
  GreenAreaC,
  GreenGridLeft,
  GreenAreaGrid,
  GreenAreaText,
  GreenGridRight,
  GreenAreaContainer,
  GreenGridLeftBottom,
  GreenAreaTextButton,
  GreenGridLeftContent,
  GreenGridRightContent,
  GreenGridRighttBottom,
  BottomThinkingContainer,
} from "./GreenArea";

const GreenArea = () => {
  return (
    <>
      <GreenAreaContainer>
        <GreenAreaC>Get more with</GreenAreaC>
        <GreenAreaC>membership.</GreenAreaC>
        <BottomThinkingContainer>
          <GreenAreaText>
            Become a Medium member to enjoy unlimited access and directly
            support
          </GreenAreaText>
          <GreenAreaText>the writers you read most.</GreenAreaText>
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
            <GreenGridLeftBottom>
              Enjoy unlimited access to every story across all of your devices.
            </GreenGridLeftBottom>
          </GreenGridLeft>
          <GreenGridRight>
            <GreenGridRightContent>
              Reward quality content.
            </GreenGridRightContent>
            <Image
              src="https://media.tenor.com/6YsumrIde9QAAAAd/efe-aydal-gif.gif"
              alt="#"
            />
            <GreenGridRighttBottom>
              Your membership helps us pay writers, and keeps your experience
              ad-free.
            </GreenGridRighttBottom>
          </GreenGridRight>
        </GreenAreaGrid>
      </GreenAreaContainer>
    </>
  );
};

export default GreenArea;
