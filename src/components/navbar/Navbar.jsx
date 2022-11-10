import React from "react";
import {
  MainNav,
  Icons0,
  Icons1,
  Icons2,
  MainIcons,
  Navs,
  MainNavContainer,
  NavsButton,
} from "./Index";

const Navbar = () => {
  return (
    <>
      <MainNavContainer>
        <MainIcons>
          <Icons0></Icons0>
          <Icons1></Icons1>
          <Icons2></Icons2>
          Medium
        </MainIcons>
        <MainNav>
          <Navs href="#">Our story</Navs>
          <Navs href="#">Membership</Navs>
          <Navs href="#">Write</Navs>
          <Navs href="#">Sign In</Navs>
          <NavsButton href="#">Get started</NavsButton>
        </MainNav>
      </MainNavContainer>
    </>
  );
};

export default Navbar;
