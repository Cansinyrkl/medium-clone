import React from "react";
import {
  ReadersGrowingContainer,
  ReadersGrowingContainerLeft,
  ReadersGrowingContainerRight,
  ReadersGrowingContainerBottom,
  ReadersGrowingAltContainer,
  BottomThinking,
  ReadersGrowingButton,
  BottomThinkingContainer,
} from "./ReadersGrowing";

const ReadersGrowing = () => {
  return (
    <>
      <ReadersGrowingContainer>
        <ReadersGrowingAltContainer>
          <ReadersGrowingContainerLeft>
            Over 100
            <br /> million
            <br /> readers and growing.
          </ReadersGrowingContainerLeft>
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
            A blank page is also a door. At Medium you can walk through it. It's
            easy
          </BottomThinking>
          <BottomThinking>
            and free to share your thinking on any topic, connect with an
            audience,
          </BottomThinking>
          <BottomThinking>
            express yourself with a range of publishing tools, and even earn
            money for
          </BottomThinking>
          <BottomThinking>your work.</BottomThinking>
          <ReadersGrowingButton>Write on Medium</ReadersGrowingButton>
        </BottomThinkingContainer>
      </ReadersGrowingContainer>
    </>
  );
};

export default ReadersGrowing;
