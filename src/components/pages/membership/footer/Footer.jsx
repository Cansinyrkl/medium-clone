import React from "react";
import {
  FooterContainer,
  FooterLogo0,
  FooterLogo1,
  FooterLogo2,
  FooterLogo,
  FooterMiddle,
  ListContainer,
  List,
} from "./Footer";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLogo>
          <FooterLogo0></FooterLogo0>
          <FooterLogo1></FooterLogo1>
          <FooterLogo2></FooterLogo2>
          Medium
        </FooterLogo>
        <FooterMiddle>Every idea needs a Medium</FooterMiddle>
        <ListContainer>
          <List>
            <u>About</u>
          </List>
          <List>
            <u>Terms</u>
          </List>
          <List>
            <u>Privacy</u>
          </List>
          <List>
            <u>Help</u>
          </List>
        </ListContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
