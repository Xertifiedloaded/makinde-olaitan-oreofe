import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useResource } from "@/lib/useApiResources";

const Blog = () => {
  const API_URL = "/api/blog/blog";
  const { data: post } = useResource(API_URL);

  return (
    <section
      className="portfolio section pb-[220px] bg-gradient-0 from-bgColor to-bgColor dark:bg-gradient-180 dark:from-bgColorAltDark dark:to-bgColorDark px-[5%] sm:px-[2%] 2xl:px-[17%]"
      id="blog"
    >
      <h2 className="uppercase tracking-wide text-h1Size font-bold text-titleColor dark:text-titleColorDark text-center">
        Latest Blog
      </h2>
      <p className="leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center">
        My
        <span className="font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]">
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
        className="mySwiper text-center"
      >
        {post.reverse().map(({ id, date, img, title, tags, description }) => {
          return (
            <SwiperSlide
              className="bg-containerColor border-2 border-bgColorDark dark:bg-containerColorDark dark:border-textColorDark py-8 px-9 rounded-xl overflow-hidden text-left flex flex-col"
              key={id}
            >
              <div className="relative">
                <img
                  src={img}
                  alt="customerImg"
                  className="w-full h-60 rounded-xl object-cover mb-8"
                />
              </div>

              <h3 className="text-xl font-bold text-titleColor dark:text-titleColorDark mt-8">
                {title}
              </h3>
              <h3 className="text-sm font-bold text-titleColor dark:text-titleColorDark my-6">
                {date}
              </h3>

              <p className="text-textColor truncate dark:text-textColorDark pb-4">
                {description}
              </p>

              <div className="flex flex-wrap text-[10px] gap-2 mb-4">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primaryColor text-white text-xs px-3 py-1 rounded-full dark:bg-primaryColorDark"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-start  my-4 items-center w-40">
                <a
                  href="#"
                  className='flex items-center justify-around w-full text-titleColor dark:text-titleColorDark text-xs gap-2 border-2 border-solid border-borderColor dark:border-borderColorDark py-2 px-4 rounded-full dark:shadow-md shadow-md relative bg-white dark:bg-titleColor before:content-[""] before:absolute before:inset-1 before:bg-primaryColor before:rounded-full before:scale-75 before:blur-sm before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:z-10 hover:before:scale-100 hover:before:blur-none hover:before:opacity-100'
                >
                  <span className="z-10 text-titleColor dark:text-titleColorDark font-jost font-bold">
                    Read&nbsp;
                    <span className="text-primaryColor">More</span>
                  </span>
                  <FaArrowRight className="z-20 text-titleColor dark:text-titleColorDark" />
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
