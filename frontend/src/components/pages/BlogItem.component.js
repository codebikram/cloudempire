import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { dateFormat, useChangeTitle } from '../../utills';

const BlogItem = () => {
  const [blog, setBlog] = useState(null);
  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/posts/${params.blogId}`
        );
        setBlog(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params.blogId]);
  useChangeTitle(blog?.post_title);
  return (
    <>
      <section className="p-8 pt-28 md:p-16 md:pt-28 min-h-screen text-white bg-gray-900">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-semibold">
          {blog?.post_title}
        </h1>

        <p className="text-base text-center pt-8">
          {dateFormat(blog?.post_date)}
          <span className="border ml-8  p-2 rounded-full bg-gray-800">
            Salesforce
          </span>
        </p>
        <div className="flex flex-col lg:w-[800px] m-auto mt-16">
          <article
            className="flex flex-col blog-content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog?.post_content),
            }}
          ></article>
        </div>
      </section>
    </>
  );
};

export default BlogItem;
