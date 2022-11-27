import React, { useEffect, useState } from "react";
import {
  MainContainer,
  BlogImage,
  TrendContent,
  TrendContentUser,
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
  const blogslice = blog.slice(488)


  return (
    <>
      <MainContainer>
        {blogslice.map(({ name, email, body }) => {
          return (
            <div>
              <TrendContent>
                <BlogImage src={Logo}></BlogImage>
                <TrendContentUser>{name}</TrendContentUser>
              </TrendContent>
              <TrendContent>
                <TrendContentHeader>{body}</TrendContentHeader>
                <ImgageImgage src={Logo}></ImgageImgage>
              </TrendContent>
              <TrendContentUser>{email}</TrendContentUser>
              {date}
              <hr />
            </div>
          );
        })}
      </MainContainer>
    </>
  );
};

export default ContentBlogs;
