import React from "react";
import Content from "../../content/Content.jsx";
import Information from "../../information/Information.jsx";
import ContentBlogs from "../../content/contentblogs/ContentBlogs.jsx";

const Home = () => {
  return (
    <>
      <Information />
      <Content />
      <ContentBlogs />
    </>
  );
};

export default Home;
