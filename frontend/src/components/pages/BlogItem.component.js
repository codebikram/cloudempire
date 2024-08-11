import React from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import useFetch, { dateFormat, useChangeTitle } from '../../utills';
import { MdErrorOutline } from 'react-icons/md';
import Loading from '../loader/Loading.component';
import Comment from '../comment/Comment.component';

const BlogItem = () => {
  const params = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:5000/api/posts/${params.blogId}`
  );
  useChangeTitle(data?.post_title);
  return (
    <section className='p-8 pt-28 md:p-16 md:pt-28 min-h-screen text-white bg-gray-900'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl text-center font-semibold'>
        {data?.post_title}
      </h1>
      {loading && <Loading />}
      {!loading && !error && (
        <p className='text-base text-center pt-8'>
          {dateFormat(data?.post_date)}
          <span className='border ml-8  p-2 rounded-full bg-gray-800'>
            Salesforce
          </span>
        </p>
      )}
      {error && (
        <div className='text-red-500 p-2 mt-5 flex items-center gap-1 m-auto w-[400px]'>
          <span>
            <MdErrorOutline />
          </span>
          <span>{error}</span>
        </div>
      )}
      <div className='flex flex-col lg:w-[800px] m-auto mt-16'>
        <article
          className='flex flex-col blog-content'
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.post_content),
          }}
        ></article>
      </div>
      <Comment />
    </section>
  );
};

export default BlogItem;
