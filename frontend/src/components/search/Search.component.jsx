import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Search = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="p-8 pt-28 pb-28 flex flex-col gap-6">
        <h2 className="text-left sm:text-center text-5xl font-semibold">
          Search the blog for more articles
        </h2>
        <div className="flex justify-center items-center">
          <form className="flex w-full sm:w-96 bg-gray-800 text-white border-white border rounded-md ">
            <input
              type="search"
              className=" w-full sm:w-96 p-4 bg-transparent focus:outline-none"
              placeholder="Search..."
              name="search"
            />
            <button className=" p-4 rounded-lg hover:bg-gray-900">
              <CiSearch className="text-xl font-bold" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
