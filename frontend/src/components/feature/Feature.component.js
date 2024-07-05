import React from "react";
import FeatureCard from "./FeatureCard.component";
import { FEATURE_WORK_DATA } from "../../data/data";

const Feature = () => {
  return (
    <>
      <h1 className='font-semibold text-4xl md:text-5xl mt-16 text-center'>
        Featured Work
      </h1>
      <section className='pt-16 pb-16 md:p-16 sm:bg-gray-700 rounded-full'>
        <article className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {FEATURE_WORK_DATA.map((item, i) => (
            <FeatureCard key={i} data={item} />
          ))}
        </article>
      </section>
    </>
  );
};

export default Feature;
