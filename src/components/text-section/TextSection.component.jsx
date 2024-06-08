import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TextSection = () => {
  return (
    <>
      <article className='pt-16 pb-16 text-white flex flex-col gap-6 flex-wrap '>
        <h1 className='font-robo text-4xl md:text-6xl text-center font-semibold'>
          Let's work together on your{" "}
          <span className='text-gray-400 capitalize'>
            {" "}
            <Typewriter
              words={["vision", "dream", "plan", "idea", "goal", "ambition"]}
              loop={false}
              cursor
              cursorStyle='_'
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className='text-sm md:text-base text-center '>
          Your Vision, Our Expertise Unleashing Potential with Customized
          Cutting-Edge Solutions
        </p>
      </article>
      <hr className=' md:mt-16 md:mb-16' />
      <article className='pt-16 pb-16 text-white flex flex-col gap-6 flex-wrap'>
        <h2 className='font-robo text-4xl md:text-5xl font-semibold'>
          Welcome to Cloud<span className='text-gray-400'>Empire</span>
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
