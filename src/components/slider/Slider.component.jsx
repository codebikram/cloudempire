import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import slider1 from "../../assets/slider/slider1.jpeg";
import slider2 from "../../assets/slider/slider2.jpeg";
import slider3 from "../../assets/slider/slider3.jpeg";

const Slider = () => {
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

  return (
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
                <motion.h1
                  variants={{
                    start: { opacity: 0, y: 20 },
                    end: { opacity: 1, y: 0 },
                  }}
                  initial='start'
                  whileInView='end'
                  transition={{
                    duration: 0.5,
                    ease: "easeIn",
                    delay: 0.25,
                  }}
                  className='text-4xl sm:text-5xl lg:text-7xl font-bold
                  text-robo'
                >
                  {item.text}
                </motion.h1>
                <motion.p
                  variants={{
                    start: { opacity: 0, y: 20 },
                    end: { opacity: 1, y: 0 },
                  }}
                  initial='start'
                  whileInView='end'
                  transition={{
                    duration: 0.5,
                    ease: "easeIn",
                    delay: 0.5,
                  }}
                  className='text-base sm:text-lg lg:text-xl font-semibold'
                >
                  {item.description}
                </motion.p>
                <motion.button
                  variants={{
                    start: { opacity: 0, y: 20 },
                    end: { opacity: 1, y: 0 },
                  }}
                  initial='start'
                  whileInView='end'
                  className='text-sm md:text-base bg-yellow-600 self-start
                  text-white font-bold rounded-md p-4 hover:from-yellow-700
                  hover:bg-yellow-700'
                  transition={{
                    duration: 0.75,
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 0.75,
                  }}
                >
                  Get a Free Consultation
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
