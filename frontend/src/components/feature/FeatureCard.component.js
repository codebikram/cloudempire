import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ data }) => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.25,
      }}
      viewport={{ once: true }}
      className='p-6 bg-no-repeat bg-cover bg-center rounded-md shadow-md bg-blend-normal bg-black w-full h-72 hover:bg-blend-multiply figure duration-1000 flex justify-center items-center relative'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${data.imageUrl}')`,
      }}
    >
      <div className='flex flex-col gap-4 lg:m-auto show duration-500 text-robo'>
        <h3 className='text-3xl'>{data.title}</h3>
        <p className='text-base'>{data.description}</p>
      </div>
      <motion.div
        className='absolute top-1 bottom-1 left-0 right-0 bg-black'
        variants={{ start: { left: 0 }, end: { left: "100%" } }}
        whileInView='end'
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
      ></motion.div>
    </motion.figure>
  );
};

export default FeatureCard;
