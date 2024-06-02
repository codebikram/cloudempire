import React from "react";

const FeatureCard = ({ data }) => {
  return (
    <figure
      className='p-6 bg-no-repeat bg-cover bg-center rounded-md shadow-md bg-blend-normal bg-black h-auto  lg:h-64 hover:bg-blend-overlay figure duration-500'
      style={{ backgroundImage: `url('${data.imageUrl}')` }}
    >
      <div className='flex flex-col gap-4 show duration-1000'>
        <h3 className='text-3xl'>{data.title}</h3>
        <p className='text-lg '>{data.description}</p>
      </div>
    </figure>
  );
};

export default FeatureCard;
