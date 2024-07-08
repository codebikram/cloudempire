import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useChangeTitle } from '../../utills';

const BlogItem = () => {
  const [blog, setBlog] = useState(null);
  const params = useParams();

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `http://localhost:5000/api/posts/${params.blogId}`
      );
      setBlog(res.data);
    })();
  }, [params.blogId]);
  useChangeTitle(blog?.post_title);
  return (
    <section className="p-8 pt-28 md:p-16 md:pt-28 min-h-screen text-white bg-gray-900 ">
      <h1 className="text-6xl text-center">{blog?.post_title}</h1>
      <div className="flex flex-col lg:w-[800px] m-auto mt-16">
        <article
          className="flex flex-col"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blog?.post_content),
          }}
        ></article>
      </div>
    </section>
  );
};

export default BlogItem;
