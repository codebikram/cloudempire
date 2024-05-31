import React from "react";
import { useChangeTitle } from "../../utills";

const Home = () => {
  useChangeTitle("");
  return <div className='p-28 min-h-screen'> Home</div>;
};

export default Home;
