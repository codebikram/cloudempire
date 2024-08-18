import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AnimatedCounter from '../counter/AnimatedCounter.component';
import useFetch from '../../utills';

const TextSection = () => {
  const { data } = useFetch('http://localhost:5000/api/info');
  let informations = [];
  if (data) {
    informations = [
      {
        text: 'Clients',
        to: data.clients,
        sign: '+',
      },
      {
        text: 'Projects',
        to: data.projects,
        sign: '+',
      },
      {
        text: 'Time to Time Schedule',
        to: data.time_to_time_schedule,
        sign: '%',
      },
    ];
  }

  return (
    <>
      <article className="pt-16 pb-16 text-white flex flex-col gap-6 flex-wrap ">
        <h1 className="font-robo text-4xl md:text-6xl text-center font-semibold">
          Let's work together on your{' '}
          <span className="text-gray-400 capitalize">
            {' '}
            <Typewriter
              words={['vision', 'dream', 'plan', 'idea', 'goal', 'ambition']}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="text-sm md:text-base text-center ">
          Your Vision, Our Expertise Unleashing Potential with Customized
          Cutting-Edge Solutions
        </p>
      </article>
      <div className="flex flex-col sm:gap-3 gap-6 sm:flex-row justify-evenly items-center pt-8 pb-8">
        {informations.length > 0 &&
          informations.map((item, i) => (
            <div
              className="flex flex-col flex-wrap items-center justify-center rounded-lg shadow-md cursor-pointer hover:!scale-105
          !duration-300 hover:!shadow-lg h-[150px] w-full md:w-[300px] bg-gradient-to-b from-gray-500
            to-gray-700"
              key={i}
            >
              <AnimatedCounter
                from={0}
                to={item.to}
                sign={item.sign}
                className="font-mono sm:text-4xl text-3xl font-bold flex gap-1"
              />
              <h3 className="text-lg sm:text-base md:text-lg lg:text-xl font-semibold capitalize">
                {item.text}
              </h3>
            </div>
          ))}
      </div>
      <hr className=" md:mt-16 md:mb-16" />
      <article className="pt-16 pb-16 text-white flex flex-col gap-6 flex-wrap">
        <h2 className="font-robo text-4xl md:text-5xl font-semibold">
          Welcome to Cloud<span className="text-gray-400">Empire</span>
        </h2>
        <p className="text-sm md:text-base ">
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
