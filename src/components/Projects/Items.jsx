import React, { useRef } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const Items = ({ projectItems }) => {
 
  const swiperRef = useRef(null);

  
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef} 
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        navigation={{
          nextEl: '.nextel',
          prevEl: '.prevel', 
        }}
        breakpoints={{
          540: { slidesPerView: 1, spaceBetween: 30 },
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
        className='mySwiper text-center relative'
      >
        {projectItems.reverse().map((projectItem) => {
          const { id, img, category, title, description, url, sourceUrl } = projectItem;
          return (
            <SwiperSlide key={id}>
              <motion.div
                layout
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0.8, scale: 0.6 }}
                exit={{ opacity: 0.8, scale: 0.6 }}
                transition={{ duration: 0.3 }}
                className='portfolio__items grid grid-flow-rows-5 h-[700px] bg-containerColor dark:bg-containerColorDark overflow-hidden text-left relative p-[30px] rounded-[20px] border-bgColorDark dark:border-bgColor border-2 border-solid dark:border-2 dark:border-solid'
              >
                <div className='rounded-[18px] h-[150px] sm:h-[200px] overflow-hidden'>
                  <img
                    src={img}
                    alt='portfolioImg'
                    className='portfolio__img h-full w-full object-cover align-middle transition-all duration-500 ease-[cubic-bezier(0.3,0,0.3,1)]'
                  />
                </div>

                <span className='text-primaryColor text-[12px] font-[700] mb-[5px] block uppercase tracking-[0.05em] mt-[20px]'>
                  {category}
                </span>
                <h3 className='text-largest text-titleColor dark:text-titleColorDark font-[700]'>
                  {title}
                </h3>

                <p className='flex my-[20px] text-textColor dark:text-textColorDark overflow-hidden whitespace-nowrap text-ellipsis'>
                  {description}
                </p>

                <div className='flex flex-col gap-4 w-full'>
                  <a
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn__start flex items-center justify-around w-full text-titleColor dark:text-titleColorDark text-normal gap-2 border-[2px] border-solid border-borderColor dark:border-borderColorDark py-[12px] px-[16px] rounded-[56px] dark:shadow-[5px_5px_rgba(255,255,255,0.1)] shadow-[5px_5px_rgba(0,0,0,0.3)] relative bg-white dark:bg-titleColor before:content-[""] before:absolute before:inset-[2px] before:bg-primaryColor before:rounded-[56px] before:scale-[0.3] before:blur-[10px] before:opacity-0 before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.3,0,0.3,1)] before:z-[1] hover:before:scale-[1] hover:before:blur-0 hover:before:opacity-100'
                  >
                    <span className='z-[1] text-titleColor dark:text-titleColorDark font-[Jost] font-[700]'>
                      See&nbsp;
                      <span className='text-primaryColor'>Project</span>
                    </span>
                    <CgWebsite className='z-[2] w-6 h-6 text-titleColor dark:text-titleColorDark' />
                  </a>
                  <a
                    href={sourceUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn__start flex items-center justify-around w-full text-titleColor dark:text-titleColorDark text-normal gap-2 border-[2px] border-solid border-borderColor dark:border-borderColorDark py-[12px] px-[16px] rounded-[56px] dark:shadow-[5px_5px_rgba(255,255,255,0.1)] shadow-[5px_5px_rgba(0,0,0,0.3)] relative bg-white dark:bg-titleColor before:content-[""] before:absolute before:inset-[2px] before:bg-primaryColor before:rounded-[56px] before:scale-[0.3] before:blur-[10px] before:opacity-0 before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.3,0,0.3,1)] before:z-[1] hover:before:scale-[1] hover:before:blur-0 hover:before:opacity-100'
                  >
                    <span className='z-[1] text-titleColor dark:text-titleColorDark font-[Jost] font-[700]'>
                      See&nbsp;
                      <span className='text-primaryColor'>Github</span>
                    </span>
                    <AiFillGithub className='z-[2] w-[26px] h-[26px] text-titleColor dark:text-titleColorDark' />
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center gap-4 mt-4">
        <button 
          className="prevel text-primaryColor text-lg font-bold bg-gray-200 p-2 rounded-full" 
          onClick={handlePrevClick}  // Use custom click handler
        >
          Prev
        </button>
        <button 
          className="nextel text-primaryColor text-lg font-bold bg-gray-200 p-2 rounded-full" 
          onClick={handleNextClick}  // Use custom click handler
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Items;
