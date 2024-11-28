import BodyTop from "@/components/BodyTop";
import PostList from "@/components/post/PostList";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <BodyTop />
      <PostList />
    </>
  );
};

export default Home;
