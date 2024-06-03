import React from "react";

const FeatureCard = ({ data }) => {
  return (
    <figure
      className='p-6 bg-no-repeat bg-cover bg-center rounded-md shadow-md bg-blend-normal bg-black h-auto  lg:h-72 hover:bg-blend-multiply figure duration-1000 flex justify-center items-center'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${data.imageUrl}')`,
      }}
    >
      <div className='flex flex-col gap-4 lg:m-auto show duration-500 text-robo'>
        <h3 className='text-3xl'>{data.title}</h3>
        <p className='text-base'>{data.description}</p>
      </div>
    </figure>
  );
};

export default FeatureCard;
