import React from "react";
import {
  JoinUsC,
  JoinUsLeft,
  JoinUsRight,
  JoinUsRightGrid,
  JoinUsRightGridHeader,
  JoinUsRightGridText,
  JoinUsRightGridButton,
} from "./JoinUs";

const JoinUs = () => {
  return (
    <>
      <JoinUsC>
        <JoinUsLeft>
          Learn more
          <br /> about us. Or
          <br /> join us.
        </JoinUsLeft>
        <JoinUsRight>
          <JoinUsRightGrid>
            <JoinUsRightGridHeader>The Medium blog</JoinUsRightGridHeader>
            <JoinUsRightGridText>
              Visit our company blog for the latest news, <br /> product
              updates, and tips and tricks.
            </JoinUsRightGridText>
            <JoinUsRightGridButton>Read our blog</JoinUsRightGridButton>
          </JoinUsRightGrid>
          <JoinUsRightGrid>
            <JoinUsRightGridHeader>Work at Medium</JoinUsRightGridHeader>
            <JoinUsRightGridText>
              Our team is home to engineers, journalists, artists, <br />
              and creatives of all stripes.
            </JoinUsRightGridText>
            <JoinUsRightGridButton>View open positions</JoinUsRightGridButton>
          </JoinUsRightGrid>
        </JoinUsRight>
      </JoinUsC>
    </>
  );
};

export default JoinUs;
