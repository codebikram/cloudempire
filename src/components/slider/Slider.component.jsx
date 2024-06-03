import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import slider1 from "../../assets/slider/slider1.jpg";
import slider2 from "../../assets/slider/slider2.jpg";
import slider3 from "../../assets/slider/slider3.jpg";
import slider4 from "../../assets/slider/slider4.jpg";
import slider5 from "../../assets/slider/slider5.jpg";

const Slider = () => {
  const sliderData = [
    {
      url: slider1,
    },
    {
      url: slider2,
    },
    {
      url: slider3,
    },
    {
      url: slider4,
    },
    {
      url: slider5,
    },
  ];

  SwiperCore.use([Navigation, Pagination]);
  return (
    <div>
      <Swiper navigation>
        {sliderData.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className='bg-no-repeat bg-center'
              style={{
                height: "550px",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${item.url})`,
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
