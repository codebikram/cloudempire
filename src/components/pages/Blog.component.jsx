import React from "react";
import { useChangeTitle } from "../../utills";
import Search from "../search/Search.component";

const Blog = () => {
  useChangeTitle("Blogs - ");
  return (
    <>
      <section className='p-8 pt-28 md:p-16 md:pt-28 min-h-screen text-white bg-gray-900'>
        <h1 className='text-center text-5xl md:text-6xl font-bold'>
          Our Blogs
        </h1>
      </section>
      <Search />
    </>
  );
};

export default Blog;
