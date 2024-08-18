import axios from 'axios';
import React, { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Comment = ({ blogId }) => {
  const initialState = { name: '', email: '', website: '', comment: '' };
  const [commentData, setCommentData] = useState(initialState);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCommentData((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const browser = navigator.userAgent;
    const data = {
      ...commentData,
      comment_agent: browser,
      comment_post_ID: blogId,
    };
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/comment/add`,
      data
    );
    if (res.data.success) {
      setMessage(res.data.message);
      setCommentData(initialState);
    }
  };
  return (
    <div className="bg-gray-900 text-white">
      <div className=" pt-16 pb-8 lg:p-16 flex flex-col gap-6 ">
        <h2 className="text-3xl font-semibold">Leave a Reply</h2>
        <p className="font-semibold">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="">
          <form onSubmit={handleSubmit} className="">
            <div className="flex flex-col gap-2 mb-5">
              {message && (
                <div className="flex items-center justify-between bg-gray-800 rounded-lg p-2">
                  <p className="text-sm text-green-500 flex items-center gap-2">
                    <span>
                      <FaRegCheckCircle />
                    </span>
                    <span>{message}</span>
                  </p>
                  <button
                    className="font-bold text-2xl text-white"
                    onClick={() => {
                      setMessage(null);
                    }}
                  >
                    <IoMdClose />
                  </button>
                </div>
              )}
              <label htmlFor="comment">
                Comment <span>&#42;</span>
              </label>
              <textarea
                rows="4"
                id="comment"
                value={commentData.comment}
                onChange={handleChange}
                required={true}
                className="block w-full rounded-md border-0 py-1.5 text-white bg-transparent shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6 p-2"
              />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">
                  Name <span>&#42;</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={commentData.name}
                  onChange={handleChange}
                  required={true}
                  className="block w-full lg:w-[250px] rounded-md border-0 py-1.5 text-white bg-transparent shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="">
                  Email <span>&#42;</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={commentData.email}
                  onChange={handleChange}
                  className="block  w-full lg:w-[250px]  rounded-md border-0 py-1.5 text-white bg-transparent shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6 p-2"
                  autoComplete="off"
                  required={true}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  value={commentData.website}
                  onChange={handleChange}
                  className="block w-full lg:w-[250px] rounded-md border-0 py-1.5 text-white bg-transparent shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            {/* <div className="mb-5 flex items-center justify-start gap-2">
              <input type="checkbox" id="save" />
              <label htmlFor="save">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div> */}

            <button
              type="submit"
              className="text-sm md:text-base bg-yellow-600 
                  text-white font-bold rounded-md p-4 hover:from-yellow-700
                  hover:bg-yellow-700"
            >
              Post comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comment;
