import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Card = ({ data }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("end");
    }
  }, [inView, controls]);

  return (
    <motion.figure
      ref={ref}
      variants={{
        start: { opacity: 0, y: 100, scale: 0.92 },
        end: { opacity: 1, y: 0, scale: 1 },
      }}
      initial='start'
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className='flex flex-wrap flex-col gap-4 bg-gradient-to-b from-gray-500 to-gray-700  p-4 rounded-lg shadow-md cursor-pointer hover:!scale-105 !duration-300 hover:!shadow-lg'
    >
      <div className='self-start'>
        <img
          src={data.imgUrl}
          alt={data.title}
          className='w-full h-20 object-contain bg-no-repeat'
        />
      </div>
      <h2 className='font-robo text-2xl font-bold'>{data.title}</h2>
      <p className='text-sm md:text-base'>{data.description}</p>
    </motion.figure>
  );
};

export default Card;
