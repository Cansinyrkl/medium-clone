import React from "react";
import {
  Image,
  YourWorldC,
  YourRight,
  YourRightButton,
  MediumLogo,
} from "./YourWorld";
const YourWorld = () => {
  return (
    <>
      <YourWorldC>
        <Image
          src="https://media.tenor.com/pRqzQzIJ0ZQAAAAd/efe-aydal-hans-bilal.gif"
          alt="#"
        />
        <YourRight>
          Read, write, <br /> and expand <br /> your world.
          <YourRightButton>Get started</YourRightButton>
        </YourRight>
      </YourWorldC>
      <MediumLogo>Medium</MediumLogo>
    </>
  );
};

export default YourWorld;
