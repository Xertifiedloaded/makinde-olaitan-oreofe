import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { post } from '../../../Data';

const Blog = () => {
  return (
    <section className='pb-[300px] bg-gradient-to-b from-bgColorAlt to-bgColor dark:bg-gradient-to-b dark:from-bgColorDark dark:to-bgColorAltDark px-[5%] sm:px-[4%] 2xl:px-[17%]' id='blog'>
      <h2 className='uppercase tracking-wide text-4xl sm:text-5xl font-bold text-titleColor dark:text-titleColorDark text-center'>
        Latest Blog
      </h2>
      <p className='leading-loose text-primaryColor uppercase text-sm font-bold mb-16 text-center'>
        My
        <span className='font-caveat text-titleColor dark:text-titleColorDark text-3xl capitalize ml-2'>
          Articles and Advices
        </span>
      </p>

      <Swiper
        pagination={{ clickable: true }}
        breakpoints={{
          540: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1200: { slidesPerView: 3, spaceBetween: 40 },
        }}
        modules={[Pagination]}
        className='mySwiper text-center'
      >
        {post.map(({ id, date, imgURL, title, description }) => {
          return (
            <SwiperSlide
              className='bg-containerColor border-2 border-bgColorDark dark:bg-containerColorDark dark:border-textColorDark py-8 px-9 rounded-xl overflow-hidden text-left flex flex-col'
              key={id}
            >
              <div className='relative'>
                <img src={imgURL} alt='customerImg' className='w-full h-60 rounded-xl object-cover mb-8' />
              </div>

              <h3 className='text-xl font-bold text-titleColor dark:text-titleColorDark mt-8'>
                {title}
              </h3>
              <h3 className='text-sm font-bold text-titleColor dark:text-titleColorDark my-6'>
                {date}
              </h3>

              <p className='text-textColor dark:text-textColorDark pb-10'>
                {description}
              </p>

              <div className='flex justify-start my-4 items-center w-40'>
                <a
                  href='#'
                  className='flex items-center justify-around w-full text-titleColor dark:text-titleColorDark text-xs gap-2 border-2 border-solid border-borderColor dark:border-borderColorDark py-2 px-4 rounded-full dark:shadow-md shadow-md relative bg-white dark:bg-titleColor before:content-[""] before:absolute before:inset-1 before:bg-primaryColor before:rounded-full before:scale-75 before:blur-sm before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:z-10 hover:before:scale-100 hover:before:blur-none hover:before:opacity-100'
                >
                  <span className='z-10 text-titleColor dark:text-titleColorDark font-jost font-bold'>
                    Read&nbsp;
                    <span className='text-primaryColor'>More</span>
                  </span>
                  <FaArrowRight className='z-20 text-titleColor dark:text-titleColorDark' />
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Blog;
