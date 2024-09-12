import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { service } from '../../../Data';

const Services = () => {
  return (
    <section
      className='pb-[50px] sm:pb-[220px] bg-gradient-to-b from-bgColorAlt to-bgColor dark:from-bgColorDark dark:to-bgColorAltDark px-[5%] sm:px-[4.5%] 2xl:px-[17%]'
      id='services'
    >
      <h2 className='uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center'>
        What I Do
      </h2>
      <p class="leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center">My<span class="font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]">Talent</span></p>

      <Swiper
        className='mySwiper text-center'
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        spaceBetween={40}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet', 
          bulletActiveClass: 'swiper-pagination-bullet-active' 
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {service.map(({ name, title, description }, index) => {
          return (
            <SwiperSlide
              className='bg-containerColor border-2 border-bgColorDark dark:bg-containerColorDark dark:border-textColorDark dark:border-2 py-8 px-9 rounded-xl overflow-hidden text-left'
              key={index}
            >
              <span className='uppercase tracking-wider text-titleColor dark:text-titleColorDark text-xl font-bold mb-16 block'>
                {name}
              </span>
              <h3 className='text-xl text-titleColor dark:text-titleColorDark mb-4 font-bold'>
                {title}
              </h3>
              <p className='min-h-[205px] sm:min-h-[175px] text-textColor dark:text-textColorDark'>
                {description}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Services;
