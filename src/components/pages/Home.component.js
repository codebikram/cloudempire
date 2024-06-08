import { lazy, Suspense } from "react";
import { useChangeTitle } from "../../utills";
import { CARD_DATA } from "../../data/data";
import Slider from "../slider/Slider.component";
import TextSection from "../text-section/TextSection.component";
import Card from "../card/Card.component";
const Feature = lazy(() => import("../feature/Feature.component"));

const Home = () => {
  useChangeTitle("");
  return (
    <>
      <Slider />
      <div className='padding min-h-screen bg-gray-800 text-white'>
        <article className='pb-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {CARD_DATA.map((item, i) => (
            <Card key={i} data={item} />
          ))}
        </article>
        <Suspense
          fallback={
            <h2 className='text-center text-xl text-white'>Loading...</h2>
          }
        >
          <Feature />
        </Suspense>
        <TextSection />
      </div>
    </>
  );
};

export default Home;
