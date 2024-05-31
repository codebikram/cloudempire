import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className='flex flex-col bg-gray-800 text-white items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-4'>404 - Not Found</h1>
      <p className='text-gray-300'>
        Sorry, the page you're looking for doesn't exist.
      </p>

      <div className='mt-6'>
        <input
          type='text'
          placeholder='Search for content...'
          className='px-4 py-2 bg-gray-700 text-white border rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>

      <div className='mt-4 text-center'>
        <p className='text-gray-300 mb-3'>Or, you might want to explore:</p>
        <Link to='/' className='text-blue-500 hover:underline'>
          Home
        </Link>
        <Link to='/blogs' className='text-blue-500 hover:underline ml-2'>
          Blogs
        </Link>
        <Link to='/contact' className='text-blue-500 hover:underline ml-2'>
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Error;
