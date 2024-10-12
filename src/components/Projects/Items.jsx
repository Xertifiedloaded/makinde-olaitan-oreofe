

import React, { useRef } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const ProjectCard = ({ projectItem }) => {
  const { img, category, title, description, url, sourceUrl } = projectItem;

  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0.8, scale: 0.6 }}
      exit={{ opacity: 0.8, scale: 0.6 }}
      transition={{ duration: 0.3 }}
      className="bg-containerColor dark:bg-containerColorDark h-[700px] overflow-hidden text-left relative p-[30px] rounded-[20px] border-2 border-solid border-bgColorDark dark:border-bgColor shadow-lg"
    >
      <div className="rounded-[18px] h-[200px] overflow-hidden mb-4">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-all duration-500 ease-[cubic-bezier(0.3,0,0.3,1)]"
        />
      </div>

      <span className="text-primaryColor text-sm font-bold mb-2 block uppercase tracking-wider">
        {category}
      </span>
      <h3 className="text-2xl text-titleColor dark:text-titleColorDark font-bold mb-4">
        {title}
      </h3>

      <p className="text-textColor dark:text-textColorDark mb-6 line-clamp-3">
        {description}
      </p>

      <div className="flex flex-col gap-4 w-full mt-auto">
        <ProjectButton href={url} text="See Project" Icon={CgWebsite} />
        <ProjectButton href={sourceUrl} text="See Github" Icon={AiFillGithub} />
      </div>
    </motion.div>
  );
};

const ProjectButton = ({ href, text, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="btn__start flex items-center justify-center w-full text-titleColor dark:text-titleColorDark text-normal gap-2 border-2 border-solid border-borderColor dark:border-borderColorDark py-3 px-4 rounded-full shadow-md dark:shadow-[5px_5px_rgba(255,255,255,0.1)] shadow-[5px_5px_rgba(0,0,0,0.3)] relative bg-white dark:bg-titleColor overflow-hidden group hover:text-white transition-colors duration-300"
  >
    <span className="z-10 font-bold group-hover:text-white transition-colors duration-300">
      {text.split(' ').map((word, index) => (
        <span key={index} className={index === 1 ? 'text-primaryColor group-hover:text-white' : ''}>
          {word}{' '}
        </span>
      ))}
    </span>
    <Icon className="z-10 w-6 h-6 group-hover:text-white transition-colors duration-300" />
    <div className="absolute inset-0 bg-primaryColor scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
  </a>
);

const Items = ({ projectItems }) => {
  const swiperRef = useRef(null);

  return (
    <div className="relative px-4 py-8">
      <Swiper
        ref={swiperRef}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet bg-gray-300 dark:bg-gray-600',
          bulletActiveClass: 'swiper-pagination-bullet-active bg-primaryColor',
        }}
        navigation={{
          nextEl: '.nextel',
          prevEl: '.prevel',
        }}
        breakpoints={{
          540: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1200: { slidesPerView: 3, spaceBetween: 40 },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        className="mySwiper"
      >
        {projectItems.map((projectItem) => (
          <SwiperSlide key={projectItem.id}>
            <ProjectCard projectItem={projectItem} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 mt-8">
        <button
          className="prevel text-primaryColor text-lg font-bold bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-primaryColor hover:text-white transition-colors duration-300"
          onClick={() => swiperRef.current?.swiper.slidePrev()}
        >
          Prev
        </button>
        <button
          className="nextel text-primaryColor text-lg font-bold bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-primaryColor hover:text-white transition-colors duration-300"
          onClick={() => swiperRef.current?.swiper.slideNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Items;