import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import Button from "../button/Button.component";
import { SLIDER_DATA } from "../../data/data.js";

const Slider = () => {
  return (
    <>
      <div>
        <Swiper
          navigation
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {SLIDER_DATA.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className='bg-no-repeat bg-center flex items-center'
                style={{
                  height: "550px",
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${item.url})`,
                  backgroundSize: "cover",
                }}
              >
                <div className='text-white flex flex-col gap-6 p-10 sm:p-20 lg:p-28'>
                  <h1
                    className='text-4xl sm:text-5xl lg:text-7xl font-bold
                  text-robo'
                  >
                    {item.text}
                  </h1>
                  <p className='text-base sm:text-lg lg:text-xl font-semibold'>
                    {item.description}
                  </p>
                  <Button className='self-start' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
