import React from "react";
import { useChangeTitle } from "../../utills";

const Blog = () => {
  useChangeTitle("Blogs - ");
  return <div className='p-28 min-h-screen'>blogs</div>;
};

export default Blog;
