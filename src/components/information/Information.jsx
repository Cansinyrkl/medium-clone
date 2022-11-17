import React from "react";
import {
  BigHeader,
  AltHeader,
  AltButton,
  InformationContainer,
} from "./Information";

const Information = () => {
  return (
    <>
      <InformationContainer>
        <BigHeader>Stay curious.</BigHeader>
        <AltHeader>
          Discover storios, thinking, and expertise
          <br /> from writers on any topik
        </AltHeader>
        <AltButton>Start reading</AltButton>
      </InformationContainer>
    </>
  );
};

export default Information;
