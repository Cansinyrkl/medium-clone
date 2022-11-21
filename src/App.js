import Content from "./components/content/Content.jsx";
import Information from "./components/information/Information.jsx";
import ContentBlogs from "./components/content/contentblogs/ContentBlogs.jsx";
import "./App.css";
import menuData from "./menuData";
import { NavLink, Route, Routes } from "react-router-dom";
import OutStory from "./components/navbar/ourstory/OutStory.jsx";
import Membership from "./components/navbar/membership/Membership.jsx";
import Write from "./components/navbar/write/Write.jsx";
import Home from "./components/home/Home.jsx";
import {
  MainNav,
  Icons0,
  Icons1,
  Icons2,
  MainIcons,
  Navs,
  MainNavContainer,
  NavsButton,
  Emty,
} from "./menuDataStyle";
function App() {
  return (
    <>
      <Information></Information>
      <Content></Content>
      <ContentBlogs></ContentBlogs>
      <MainNavContainer>
        <MainIcons>
          <Icons0></Icons0>
          <Icons1></Icons1>
          <Icons2></Icons2>
          Medium
        </MainIcons>
        <Emty></Emty>
        {menuData.map((item, index) => {
          return (
            <MainNav>
              <div key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    ["nav-link", isActive ? "active" : null].join(" ")
                  }
                >
                  <Navs>{item.title}</Navs>
                </NavLink>
              </div>
            </MainNav>
          );
        })}
        <NavsButton href="#">Get started</NavsButton>
      </MainNavContainer>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/membership" element={<Membership />}></Route>
        <Route path="/outstory" element={<OutStory />}></Route>
      </Routes>
    </>
  );
}

export default App;
