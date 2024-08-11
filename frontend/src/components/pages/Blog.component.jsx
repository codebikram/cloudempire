import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFetch, { dateFormat, useChangeTitle } from '../../utills';
import Search from '../search/Search.component';
import Loading from '../loader/Loading.component';
import { FaArrowRight } from 'react-icons/fa';
import DOMPurify from 'dompurify';
import { MdErrorOutline } from 'react-icons/md';
import Comment from '../comment/Comment.component';

const Blog = () => {
  const location = useLocation();
  useChangeTitle('Blogs - ');
  const urlParams = new URLSearchParams(location.search);
  const searchQuery = urlParams.toString();
  const { data, loading, error } = useFetch(
    `http://localhost:5000/api/posts?${searchQuery}`
  );

  return (
    <>
      <section className='p-8 pt-28 md:p-16 md:pt-28 min-h-screen text-white bg-gray-900'>
        <h1 className='text-center text-5xl md:text-6xl font-bold'>
          Our Blogs
        </h1>
        {loading && <Loading />}
        {error && (
          <div className='text-red-500 p-2 mt-5 flex items-center gap-1 m-auto w-[400px]'>
            <span>
              <MdErrorOutline />
            </span>
            <span>{error}</span>
          </div>
        )}
        <div className='grid items-stretch justify-center md:grid-cols-2 gap-10 text-slate-800 pt-16 '>
          {data &&
            data.map((blog) => (
              <article
                className='bg-gray-800 text-white rounded-lg shadow-md hover:scale-105 duration-300 hover:shadow-lg'
                key={blog.ID}
              >
                <div className='p-8 flex flex-col gap-4 justify-center'>
                  <p className='text-sm'>{dateFormat(blog.post_date)}</p>
                  <h2 className='text-4xl font-semibold font-robo'>
                    {blog.post_title}
                  </h2>

                  <p
                    className=''
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        blog.post_content.slice(0, 445) + '...'
                      ),
                    }}
                  ></p>
                  <Link
                    className='text-yellow-600 flex items-center gap-1'
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
      <Comment />
    </>
  );
};

export default Blog;

//
