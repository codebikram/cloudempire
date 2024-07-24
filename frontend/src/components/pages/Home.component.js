import { lazy, Suspense } from 'react';
import { useChangeTitle } from '../../utills';
import { CARD_DATA } from '../../data/data';
import Slider from '../slider/Slider.component';
import Card from '../card/Card.component';
import Loading from '../loader/Loading.component';
const TextSection = lazy(() => import('../text-section/TextSection.component'));
const Feature = lazy(() => import('../feature/Feature.component'));

const Home = () => {
  useChangeTitle('');
  return (
    <>
      <Slider />
      <div className="padding min-h-screen bg-gray-800 text-white">
        <article className="pb-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARD_DATA.map((item, i) => (
            <Card key={i} data={item} />
          ))}
        </article>
        <Suspense fallback={<Loading />}>
          <Feature />
          <TextSection />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
