import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import slider1 from "../../assets/slider/slider1.jpeg";
import slider2 from "../../assets/slider/slider2.jpeg";
import slider3 from "../../assets/slider/slider3.jpeg";
import Modal from "../modal/Modal.component";

const Slider = () => {
  const [showModal, setShowModal] = useState(false);

  const sliderData = [
    {
      text: "Get a premium class service",
      description:
        "Empowering Your Vision with Expert Guidance and Proven Strategies",
      url: slider3,
    },
    {
      text: "Grow your business without any technical hessle",
      description:
        "Empowering Your Vision with Expert Guidance and Proven Strategies",
      url: slider1,
    },

    {
      text: "Create and grow your business with us",
      description:
        "Empowering Your Vision with Expert Guidance and Proven Strategies",
      url: slider2,
    },
  ];
  const handleClick = () => {
    setShowModal(true);
  };
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
          {sliderData.map((item, i) => (
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
                  <button
                    onClick={handleClick}
                    className='text-sm md:text-base bg-yellow-600 self-start
                  text-white font-bold rounded-md p-4 hover:from-yellow-700
                  hover:bg-yellow-700'
                  >
                    Get a Free Consultation
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Slider;
