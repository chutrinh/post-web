import React, { useEffect, useState } from "react";
import Mainavigate from "./mainavigate";
import Post from "../components/post";
import CreatePost from "../components/createPost";

function Home() {
  const [height, setHeight] = useState();
  useEffect(() => {
    setHeight(document.querySelector(".get-height").clientHeight);
  });
  return (
    <>
      <div style={{ marginTop: height + 20 + "px" }}></div>
      <Mainavigate />
      <CreatePost />
      <Post />
    </>
  );
}

export default Home;
