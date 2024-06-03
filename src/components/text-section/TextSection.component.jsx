import React from "react";

const TextSection = () => {
  return (
    <>
      <article className='pt-16 pb-16 text-white flex flex-col gap-6 flex-wrap '>
        <h1 className='font-robo text-4xl md:text-6xl text-center font-semibold'>
          Let's work together on your{" "}
          <span className='opacity-60'>next project</span>
        </h1>
        <p className='text-sm md:text-base text-center '>
          Your Vision, Our Expertise Unleashing Potential with Customized
          Cutting-Edge Solutions
        </p>
      </article>
      <hr className=' md:mt-16 md:mb-16' />
      <article className='pt-16 pb-16 text-white flex flex-col gap-6 flex-wrap'>
        <h2 className='font-robo text-4xl md:text-5xl font-semibold'>
          Welcome to Cloudempire
        </h2>
        <p className='text-sm md:text-base '>
          CloudEmpire stands out in cloud computing with a focus on
          personalized,expert-driven solutions in Salesforce,Azure,and AWS.Our
          approach combines innovative,tailored strategies with seamless
          integration, ensuring scalable and secure cloud implementations. We're
          committed to driving digital transformation as a trusted,
          forward-thinking partner
        </p>
      </article>
    </>
  );
};

export default TextSection;
