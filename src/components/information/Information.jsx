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
      <hr />
      <InformationContainer>
        <BigHeader>Stay curious.</BigHeader>
        <AltHeader>
          Discover storios, thinking, and expertise
          <br /> from writers on any topik
        </AltHeader>
        <AltButton>Start reading</AltButton>
      </InformationContainer>
      <hr />
    </>
  );
};

export default Information;
