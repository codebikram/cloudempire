import React from "react";

const Card = ({ data }) => {
  return (
    <figure className='flex flex-wrap flex-col gap-4 bg-gradient-to-b from-gray-500 to-gray-700  p-4 rounded-lg shadow-md hover:scale-105 duration-300 hover:shadow-lg cursor-pointer'>
      <div>
        <img src={data.imgUrl} alt={data.title} className='w-20 h-20' />
      </div>
      <h2 className='font-robo text-2xl font-bold'>{data.title}</h2>
      <p className='text-sm md:text-base'>{data.description}</p>
    </figure>
  );
};

export default Card;
