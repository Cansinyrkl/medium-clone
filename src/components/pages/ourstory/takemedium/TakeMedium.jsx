import React from "react";
import {
  TakeMediumContainer,
  TakeMediumContainerLeft,
  TakeMediumContainerRight,
  TakeMediumContainerLeftImg,
  TakeMediumContainerText,
} from "./TakeMedium";

const TakeMedium = () => {
  return (
    <>
      <TakeMediumContainer>
        <div>
          <TakeMediumContainerLeft>Take Medium </TakeMediumContainerLeft>
          <TakeMediumContainerLeft>with you.</TakeMediumContainerLeft>
          <TakeMediumContainerText>
            Download our app so you can read wherever you are.
          </TakeMediumContainerText>
          <TakeMediumContainerLeftImg src={"/image/Apple.jpg"} />
          <TakeMediumContainerLeftImg src={"/image/Play.jpg"} />
        </div>
        <TakeMediumContainerRight src={"/image/Gridright.jpg"} />
      </TakeMediumContainer>
    </>
  );
};

export default TakeMedium;
