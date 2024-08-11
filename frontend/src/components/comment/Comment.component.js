import React from 'react';

const Comment = () => {
  const handleSubmit = () => {};
  return (
    <div className='bg-gray-900 text-white'>
      <div className='p-8 sm:p-16 md:p-28 flex flex-col gap-6 '>
        <h2 className='text-3xl font-semibold'>Leave a Reply</h2>
        <p className='font-semibold'>
          Your email address will not be published. Required fields are marked *
        </p>
        <div className=''>
          <form onSubmit={handleSubmit} className=''>
            <div className='flex flex-col gap-2 mb-5'>
              <label htmlFor='comment'>
                Comment <span>&#42;</span>
              </label>
              <textarea
                rows='4'
                id='comment'
                className='block w-full rounded-md border-0 py-1.5 text-white bg-transparent shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6 p-2'
              />
            </div>
            <div className='flex flex-col md:flex-row md:justify-between gap-3 mb-5'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>
                  Name <span>&#42;</span>
                </label>
                <input
                  type='text'
                  id='name'
                  className='block w-full lg:w-[250px] rounded-md border-0 py-1.5 text-white bg-transparent shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='email' className=''>
                  Email <span>&#42;</span>
                </label>
                <input
                  type='email'
                  id='email'
                  className='block  w-full lg:w-[250px]  rounded-md border-0 py-1.5 text-white bg-transparent shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6 p-2'
                  autoComplete='off'
                  required={true}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='website'>Website</label>
                <input
                  type='text'
                  id='website'
                  className='block w-full lg:w-[250px] rounded-md border-0 py-1.5 text-white bg-transparent shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6 p-2'
                />
              </div>
            </div>

            <div className='mb-5 flex items-center justify-start gap-2'>
              <input type='checkbox' id='save' />
              <label htmlFor='save'>
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <button
              type='submit'
              className='text-sm md:text-base bg-yellow-600 
                  text-white font-bold rounded-md p-4 hover:from-yellow-700
                  hover:bg-yellow-700'
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
