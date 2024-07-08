import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dateFormat, useChangeTitle } from '../../utills';
import Search from '../search/Search.component';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa';
import DOMPurify from 'dompurify';

const Blog = () => {
  const [blogs, setBlogs] = useState(null);
  useChangeTitle('Blogs - ');

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:5000/api/posts/');
      setBlogs(res.data);
    })();
  }, []);

  return (
    <>
      <section className="p-8 pt-28 md:p-16 md:pt-28 min-h-screen text-white bg-gray-900">
        <h1 className="text-center text-5xl md:text-6xl font-bold">
          Our Blogs
        </h1>
        <div className="grid items-stretch justify-center md:grid-cols-2 gap-10 text-slate-800 pt-16 ">
          {blogs &&
            blogs.map((blog) => (
              <article
                className="bg-gray-800 text-white rounded-lg shadow-md"
                key={blog.ID}
              >
                <div className="p-8 flex flex-col gap-4 justify-center">
                  <p className="text-sm">{dateFormat(blog.post_date)}</p>
                  <h2 className="text-4xl font-semibold font-robo">
                    {blog.post_title}
                  </h2>

                  <p
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        blog.post_content.slice(0, 445) + '...'
                      ),
                    }}
                  ></p>
                  <Link
                    className="text-yellow-600 flex items-center gap-1"
                    to={`/blogs/${blog.ID}`}
                  >
                    <span>Read more</span> <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </section>
      <Search />
    </>
  );
};

export default Blog;

//
