import React, { useEffect, useState } from "react";
import {
  MainContainer,
  BlogImage,
  TrendContent,
  TopTrend,
  TrendContentUser,
  TrendContentFlex,
  TrendContentHeader,
  ImgageImgage,
} from "./ContentBlogs";
import Logo from "../attempt/01.jpg";

const ContentBlogs = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  let postDate = new Date();
  let date =
    postDate.getDate() +
    "-" +
    parseInt(postDate.getMonth() + 1) +
    "-" +
    postDate.getFullYear();

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <MainContainer>
        {blog.map(({ name, email, body }) => {
          return (
            <div>
              <BlogImage src={Logo}></BlogImage>
              <TrendContent>
                <TopTrend>
                  <TrendContentUser>{name}</TrendContentUser>
                  <TrendContentUser>{email}</TrendContentUser>
                </TopTrend>
                <TrendContentFlex>
                  <TrendContentHeader>{body}</TrendContentHeader>
                  <ImgageImgage src={Logo}></ImgageImgage>
                  {date}
                </TrendContentFlex>
              </TrendContent>
              <hr />
            </div>
          );
        })}
      </MainContainer>
    </>
  );
};

export default ContentBlogs;
