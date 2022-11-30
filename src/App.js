import "./App.css";
import menuData from "./menuData";
import OutStory from "./components/pages/ourstory/OutStory.jsx";
import Membership from "./components/pages/membership/Membership.jsx";
import Write from "./components/pages/write/Write";
import Home from "./components/pages/home/Home.jsx";
import ErrorPage from "./components/pages/errorpage/ErrorPage.jsx";
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
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <MainNavContainer>
          <MainIcons>
            <Icons0></Icons0>
            <Icons1></Icons1>
            <Icons2></Icons2>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Medium
            </Link>
          </MainIcons>

          <Emty></Emty>
          {menuData.map((item, index) => {
            return (
              <MainNav>
                <div key={index}>
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Navs>{item.title}</Navs>
                  </Link>
                </div>
              </MainNav>
            );
          })}
          <NavsButton href="#">Get started</NavsButton>
        </MainNavContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/outstory" element={<OutStory />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
